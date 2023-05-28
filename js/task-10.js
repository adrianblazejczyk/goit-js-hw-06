function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  const divWeight = 30; //px
  const listNewElements = [];

  for (let index = 0; index < amount; index++) {
    const newElement = document.createElement("div");
    newElement.style.backgroundColor = getRandomHexColor();
    newElement.style.width = `${divWeight + index * 10}px`;
    newElement.style.height = `${divWeight + index * 10}px`;
    newElement.classList.add("div-element");
    listNewElements.push(newElement);
  }
  boxes.append(...listNewElements);
}
function divCreator(eve) {
  createBoxes(input.value);
}
function destroyBoxes(){
  const divElement = document.querySelectorAll(".div-element");
  divElement.forEach(element => {
    element.remove();
  });
}
const bntcreate = document.querySelector("[data-create]");
const bntdestory = document.querySelector("[data-destroy]");
const input = document.querySelector("input");
const boxes = document.querySelector("#boxes");

bntcreate.addEventListener("click", divCreator);
bntdestory.addEventListener("click", destroyBoxes);