"use scrict";
function validationInput(eve) {
  if (eve.currentTarget.value.length >= input.dataset.length) {
    input.className = "valid";
  } else {
    input.className = "invalid";
  }
}
const input = document.querySelector("#validation-input");
input.addEventListener("blur", validationInput);
