const NETLIFY_FORM_ENDPOINT = "/__forms.html";

export async function submitNetlifyForm(formElement) {
  const body = new URLSearchParams(new FormData(formElement));

  const response = await fetch(NETLIFY_FORM_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });

  if (!response.ok) {
    throw new Error(`Netlify form submission failed with status ${response.status}`);
  }

  return response;
}
