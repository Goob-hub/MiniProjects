let diceP1img = document.querySelector(".dice-1");
let diceP2img = document.querySelector(".dice-2");
let result = document.querySelector(".result");
let btn = document.querySelector("button");

let diceP1;
let diceP2;


function randDiceNum(){
    return Math.floor(Math.random() * 6) + 1;
}

function updateImages() {
    diceP1img.src = `./img/dice${diceP1}.png`;
    diceP2img.src = `./img/dice${diceP2}.png`;
}

btn.addEventListener("click", rollDice => {
    diceP1 = randDiceNum();
    diceP2 = randDiceNum();
    updateImages();
    if(diceP1 > diceP2){
        result.textContent = "Player 1 is the winner!";
    } else if (diceP2 > diceP1) {
        result.textContent = "Player 2 is the winner!";
    } else {
        result.textContent = "It's a muthafuckin tie!"
    }

    
});
