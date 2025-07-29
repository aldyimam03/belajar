const form = document.querySelector("form");
const usernameInput = form.elements.name;

form.addEventListener("submit", (event) => event.preventDefault());

const customValidationUsernameHandler = (event) => {
  event.target.setCustomValidity("");

  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity("Wajib diisi.");
    return;
  }

  if (event.target.validity.tooShort) {
    event.target.setCustomValidity("Minimal panjang adalah enam karakter.");
    return;
  }

  if (event.target.validity.patternMismatch) {
    event.target.setCustomValidity(
      "Tidak boleh diawali dengan simbol, mengandung white space atau spasi, dan mengandung karakter spesial seperti dolar ($)."
    );
    return;
  }
};

name.addEventListener("change", customValidationUsernameHandler);
name.addEventListener("invalid", customValidationUsernameHandler);

name.addEventListener("blur", (event) => {
  // Validate the field
  const isValid = event.target.validity.valid;
  const errorMessage = event.target.validationMessage;

  const connectedValidationId = event.target.getAttribute("aria-describedby");
  const connectedValidationEl = connectedValidationId
    ? document.getElementById(connectedValidationId)
    : null;

  if (connectedValidationEl && errorMessage && !isValid) {
    connectedValidationEl.innerText = errorMessage;
  } else {
    connectedValidationEl.innerText = "";
  }
});
