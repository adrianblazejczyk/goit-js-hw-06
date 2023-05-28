"use strict";
function showListSummary(itemlist) {
  console.log(`Number of categories: ${itemlist.length}`);
  console.log(` `);

  itemlist.forEach((item) => {
    console.log(`Category: ${item.querySelector("h2").textContent}`);
    console.log(`Elements: ${item.querySelectorAll("li").length}`);
    console.log(` `);
  });
}

const itemList = document.querySelectorAll(".item");
showListSummary(itemList);
