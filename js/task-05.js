"use strict";
function printText(eve) {
  const output = document.querySelector("#name-output");
  if (eve.currentTarget.value.length > 0) {
    output.textContent = eve.currentTarget.value;
  } else {
    output.textContent = "Anonymous";
  }
}

const input = document.querySelector("#name-input");
input.addEventListener("input", printText);
