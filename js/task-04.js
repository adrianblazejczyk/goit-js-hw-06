"use strict";
let counter = 0;
function updateValue() {
  const score = document.querySelector("#value");
  score.textContent = counter;
}

function buttonTask(eve) {
  switch (eve.target.dataset.action) {
    case "increment":
      ++counter;
      break;
    case "decrement":
      --counter;
      break;
  }
  updateValue();
}

const buttonsCouter = document.querySelectorAll("button");
buttonsCouter.forEach((element) => {
  element.addEventListener("click", buttonTask);
});
