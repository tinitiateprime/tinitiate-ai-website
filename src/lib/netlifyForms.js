const NETLIFY_FORM_ENDPOINTS = ["/", "/__forms.html"];

export async function submitNetlifyForm(formElement) {
  const formData = new FormData(formElement);
  const formName = formData.get("form-name") || formElement.getAttribute("name");

  if (formName && !formData.get("form-name")) {
    formData.set("form-name", formName);
  }

  const body = new URLSearchParams(formData);
  const failures = [];

  for (const endpoint of NETLIFY_FORM_ENDPOINTS) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json, text/html",
        },
        body: body.toString(),
      });

      if (response.ok) {
        return response;
      }

      failures.push(`${endpoint}: ${response.status}`);
    } catch (error) {
      failures.push(`${endpoint}: ${error.message}`);
    }
  }

  throw new Error(
    `Netlify form submission failed (${failures.join(", ")})`
  );
}
