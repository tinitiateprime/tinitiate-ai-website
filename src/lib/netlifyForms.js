const NETLIFY_FORM_ENDPOINT = "/";

export function getCurrentPageUrl() {
  if (typeof window === "undefined") {
    return "";
  }

  return window.location.href;
}

export async function submitNetlifyForm(formName, fields = {}) {
  const body = new URLSearchParams();
  body.append("form-name", formName);

  Object.entries(fields).forEach(([key, value]) => {
    if (value === undefined || value === null) {
      return;
    }

    body.append(key, String(value));
  });

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
