function showCategInfo (){
  const listOfCategories = document.querySelectorAll('#categories .item');
  console.log("Number of categories: ", listOfCategories.length);
  listOfCategories.forEach(category => {
    const categoryName = category.querySelector('h2');
    const categoryCount = category.querySelectorAll('ul li');
    console.log(`Catogory: ${categoryName.textContent} \n Elements: ${categoryCount.length}`);
  })
}

showCategInfo();