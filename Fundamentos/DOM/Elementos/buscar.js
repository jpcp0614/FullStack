//* PARENT NODE:
//* Filho
console.log(document.querySelector(".ingredient-item")); // li

//* Pai
console.log(document.querySelector(".ingredient-item").parentNode); // ul

//* Avô
console.log(document.querySelector(".ingredient-item").parentNode.parentNode); // section

//* Bisavô
console.log(document.querySelector(".ingredient-item").parentNode.parentNode.parentNode); // body


//* PARENT ELEMENT:   
console.log(document.querySelector("html").parentElement); // null


//* CHILD NODES:
console.log(document.querySelector(".ingredients-section").childNodes); // [text, h2, text, ul, text]


//* CHILDREN: 
console.log(document.querySelector(".ingredients-section").children); // [h2, ul]


//* FIRST ELEMENT CHILD:  
console.log(document.querySelector(".ingredients-section").firstElementChild); // h2


//* LAST ELEMENT CHILD:  
console.log(document.querySelector(".ingredients-section").lastElementChild); // ul


//* NEXT ELEMENT SIBLING:  
console.log(document.querySelector(".ingredients-section").nextElementSibling); // section.recipe-preparation-section


//* PREVIOUS ELEMENT SIBLING:  
console.log(document.querySelector(".ingredients-section").previousElementSibling); // header




