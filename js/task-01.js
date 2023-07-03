const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.children;

console.log(`Number of categories: ${categoryItems.length}`);

Array.from(categoryItems).forEach((item) => {
  const categoryName = item.firstElementChild.textContent;
  const subItems = item.lastElementChild.children;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${subItems.length}`);
});