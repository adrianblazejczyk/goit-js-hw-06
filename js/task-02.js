"use strict";
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

function createList(listIngredients) {
  const listLi = [];

  listIngredients.forEach((element) => {
    const item = document.createElement("li");
    item.textContent = element;
    item.className = "item";
    listLi.push(item);
  });
  return listLi;
}
function addElement(callback ,listElement,querySelector){
  const handlePosition = document.querySelector(querySelector);
  handlePosition .append(...callback(listElement));
}

addElement(createList, ingredients ,"#ingredients");

