const generateBtn = document.querySelector(".generate");

let pageTxt = document.querySelector(".page");
let planetPageLink = document.querySelector("a");
let planetEntry = document.querySelector(".entry");

let page;
let link = "https://science.nasa.gov/exoplanets/exoplanet-catalog/?pageno=2&content_list=true";
let entry;
let donePlanets = [

];

function calcPageEntry(number){
    page = Math.floor(number / 15);
    entry = number - (page * 15);

    pageTxt.textContent = page;
    planetEntry.textContent = entry;
}

function checkIfDuplicate(number){
    for (let i = 0; i < donePlanets.length; i++) {
        const planetNum = donePlanets[i];
        if(number === planetNum){
            checkIfDuplicate(generateRandNum());
        } else {
            return number;
        }
    }

    return number;
}

function generateRandNum(){
    return Math.floor(Math.random() * 5780);
}

generateBtn.addEventListener("click", (e) => {
    let randNum = checkIfDuplicate(generateRandNum());
    calcPageEntry(randNum);
    planetPageLink.href = `https://science.nasa.gov/exoplanets/exoplanet-catalog/?pageno=${page}&content_list=true`
});