const NETLIFY_FORM_ENDPOINT = "/__forms.html";
const UNIFIED_FORM_NAME = "request-callback";

function encodeFormData(formData) {
  const body = new URLSearchParams();

  for (const [key, value] of formData.entries()) {
    body.append(key, typeof value === "string" ? value : value.name);
  }

  return body.toString();
}

export async function submitNetlifyForm(formElement) {
  const formData = new FormData(formElement);
  const formName = formData.get("form-name") || formElement.getAttribute("name");

  if (formName && formName !== UNIFIED_FORM_NAME && !formData.get("originalFormName")) {
    formData.set("originalFormName", formName);
  }
  formData.set("form-name", UNIFIED_FORM_NAME);

  const body = encodeFormData(formData);

  try {
    const response = await fetch(NETLIFY_FORM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json, text/html",
      },
      body,
    });

    if (response.ok) {
      return response;
    }

    throw new Error(`${NETLIFY_FORM_ENDPOINT}: ${response.status}`);
  } catch (error) {
    throw new Error(`Netlify form submission failed (${error.message})`);
  }
}
