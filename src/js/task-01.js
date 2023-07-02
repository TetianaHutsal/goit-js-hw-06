const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.querySelectorAll("li.item");

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const subItems = item.querySelectorAll("li");
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${subItems.length}`);
});
