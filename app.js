//carousel code
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 2000);
    }
}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

let currentTileIndex = 0;
const tiles = document.querySelectorAll('.event');
const modal = document.getElementById("cont");
const modalBody = document.getElementById("contbody");

function openTile(index) {
    currentTileIndex = index;
    modalBody.textContent = tiles[index].textContent;
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Disable scroll on the main page
}

function closeTile() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Enable scroll on the main page
}

function showTile(index) {
    modalBody.textContent = tiles[index].textContent;
}

document.onkeydown = function(event) {
    if (modal.style.display === "block") {
        if (event.key === "ArrowRight") {
            currentTileIndex = (currentTileIndex + 1) % tiles.length;
            showTile(currentTileIndex);
        } else if (event.key === "ArrowLeft") {
            currentTileIndex = (currentTileIndex - 1 + tiles.length) % tiles.length;
            showTile(currentTileIndex);
        } else if (event.key === "Escape") {
            closeTile();
        }
    }
};
