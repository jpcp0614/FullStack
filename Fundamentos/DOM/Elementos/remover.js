let ingredientsListItems = document.querySelectorAll(".ingredient-item"); // [li]
let ingredientsList = document.querySelector(".ingredients-list") // ul

for(let i = 0; i < ingredientsListItems.length; i++){
  let element = ingredientsListItems[i];
  if(element.innerText.includes('sal')){
    ingredientsList.removeChild(element)
  }
}