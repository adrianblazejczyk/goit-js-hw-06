function showListSummary(itemlist) {
  console.log(`Number of categories: ${itemlist.length}`);
  console.log(` `);
  
  itemlist.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`)
    console.log(`Elements: ${item.childNodes.length-1}`);
    console.log(` `);
  });

}

const itemList = document.querySelectorAll(".item");
showListSummary(itemList);

