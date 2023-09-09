const background = document.querySelector("body");
const button = document.querySelector("button");
const hexText = document.getElementById("hex");

function randColor(){
    let color = "#";
    for (let i = 0; i < 6; i++) {
        num = Math.floor(Math.random() * 10);
        color = color + num;
    }
    return color;
}

function changeBackgorund() {
    let color = randColor();
    hexText.textContent = color;
    background.style.backgroundColor = color;
}


button.addEventListener("click", changeBackgorund);
