function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function changeColor(eve) {  
  const colorRandom = getRandomHexColor();
  const text = document.querySelector(".color");
  const bgc = document.querySelector("body");
  text.textContent = colorRandom;
  bgc.style.backgroundColor = colorRandom;
}

const buttonChangeColor = document.querySelector(".change-color");
buttonChangeColor.addEventListener("click",changeColor);

