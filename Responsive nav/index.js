let button = document.querySelector("button");
let itemContainer = document.querySelector(".list-container"); 

button.addEventListener("click", showItems => {itemContainer.classList.toggle("expand")});