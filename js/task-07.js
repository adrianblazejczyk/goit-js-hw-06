"use strict";

function setSizeChar(eve) {
  const text = document.querySelector("#text");
  text.style.fontSize = `${eve.currentTarget.value}px`;
}

const slider = document.querySelector("#font-size-control");
slider.addEventListener("input", setSizeChar);
