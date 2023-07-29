let ingredientItems = [
  "<strong>couve-flor</strong>",
  "1l de leite",
  "200g de catupiry",
  "200g de peito de peru defumado",
  "200g de mussarela ralada",
  "sal a gosto"
];

let ingredientsList = document.querySelector(".ingredients-list"); // ul

for (let i = 0; i < ingredientItems.length; i++) {
  let ingredient = ingredientItems[i]; 

  let liListItem = document.createElement("li");  

  liListItem.innerHTML = ingredient;  
  ingredientsList.appendChild(liListItem);
  
}

