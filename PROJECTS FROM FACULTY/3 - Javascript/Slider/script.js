const imgArr = [
    "./images/image1.jpg",
    "./images/image2.jpg",
    "./images/image3.jpg"
];

const imgContainer = document.getElementById("img-container");
const sliderImage = document.getElementById("slider-image");
const previousBtn = document.getElementById("Privious");
const nextBtn = document.getElementById("next");

let currentIdx = 0;

previousBtn.addEventListener("click", () => {
    currentIdx--;

    // if thecurrent img is 0 ad when we click on it then it would become - 1
    // so in these scenario we will show the last img so no conflict occures 
    if (currentIdx < 0) {
        currentIdx = imgArr.length - 1;
    }
    updateImage();
});

nextBtn.addEventListener("click", () => {
    currentIdx++
    // same here as if the index if more than the images than we will show the first img 
    if (currentIdx >= imgArr.length) {
        currentIdx = 0;
    }
    updateImage();
});

function updateImage() {
    sliderImage.src = imgArr[currentIdx];
}
updateImage();

// every time this will reset the index s othat it can run as an loop 
setInterval(() => {
    currentIdx++;
    if (currentIdx >= imgArr.length) {
        currentIdx = 0;
    }
    updateImage();
}, 3000);