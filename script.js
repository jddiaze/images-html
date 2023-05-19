document.getElementById("toggleButton").addEventListener("click", function () {
    var sliderContainer = document.getElementById("sliderContainer");
    var galleryContainer = document.getElementById("galleryContainer");
    var toggleButton = document.getElementById("toggleButton");
    var iconElement = document.getElementById("iconos");

    if (sliderContainer.style.display === "none") {
        sliderContainer.style.display = "flex";
        galleryContainer.style.display = "none";
        toggleButton.innerHTML = "<i id='iconos' class='fas fa-images'></i>  Ver vista galería de imágenes";
    } else {
        sliderContainer.style.display = "none";
        galleryContainer.style.display = "block";
        toggleButton.innerHTML = "<i id='iconos' class='fas fa-sliders-h'></i>  Ver vista deslizador de imágenes";
    }
});

var images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
var currentImageIndex = 0;

document.getElementById("prevButton").addEventListener("click", function () {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
});

document.getElementById("nextButton").addEventListener("click", function () {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
});

function updateImage() {
    var imgElements = document.getElementsByClassName("img");
    for (var i = 0; i < imgElements.length; i++) {
        imgElements[i].src = images[currentImageIndex];
    }
}
