const slideContainer = document.getElementById("container");
const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");
const btnAddSlide = document.getElementById("add-slide");
const containerStyle = slideContainer.style;

let currentSlide = 1;
let currentSlideText = document.getElementById("currentSlide");

let prevSlide;
let totalSlides;
let carouselStart;
let carouselEnd;


function showActiveSlide(){
    //hide slides that arent equal to current slide
    let newSlide = document.getElementsByClassName(`slide-${currentSlide}`)[0];
    let prevEl = document.getElementsByClassName(`slide-${prevSlide}`)[0];
    prevEl.classList.add("hidden")
    newSlide.classList.remove("hidden");
}

function resetCarousel() {
    currentSlide = 1;
    currentSlideText.textContent = currentSlide;
    totalSlides = document.getElementsByClassName("slide").length;
    carouselStart = 100 * (totalSlides - 1);
    carouselEnd = 100 * (totalSlides - 1) * -1;
    containerStyle.marginLeft =  carouselStart  + "%";
    containerStyle.width = (totalSlides * 100) + "%";
    containerStyle.display = "grid";
    containerStyle.gridTemplate = "100% / repeat(" + totalSlides + ", 1fr)";
    showActiveSlide();
}

function addSlide(){
    prevSlide = currentSlide;
    slideContainer.innerHTML += createSlideHtml(document.getElementsByClassName("slide").length);
    resetCarousel();
}

function calcMargin(direction){
    return (parseInt(containerStyle.marginLeft)) + (200 * direction);
}

function setMargin(direction){
    containerStyle.marginLeft = calcMargin(direction) + "%";
}

function createSlideHtml(slideNum) {
    return '<div class="slide slide-' + (slideNum + 1) + ' hidden"> <img class="img" src="./img/person3.jpg" alt=""> <p class="slide-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl nisi scelerisque eu ultrices vitae auctor. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Nunc consequat interdum varius sit amet mattis vulputate enim. Blandit volutpat maecenas volutpat blandit aliquam. </p> </div>';
}

function checkSlide(direction){
    //This function will check to see if the carousel will have to default to start or end
    if(currentSlide <= 0){
        containerStyle.marginLeft = carouselEnd + "%";
        currentSlide = totalSlides;
    } else if(currentSlide >= totalSlides + 1) {
        containerStyle.marginLeft = carouselStart + "%";
        currentSlide = 1;
    } else {
        setMargin(direction);
    }
}

function changeSlide(direction) {
    prevSlide = currentSlide;
    if(direction > 0){
        currentSlide--;
    } else if (direction < 0) {
        currentSlide++;
    }
    checkSlide(direction);
    showActiveSlide();
    currentSlideText.textContent = currentSlide;
}

btnLeft.addEventListener("click", execute => changeSlide(1));

btnRight.addEventListener("click", execute => changeSlide(-1));

btnAddSlide.addEventListener("click", execute => addSlide());

resetCarousel();
