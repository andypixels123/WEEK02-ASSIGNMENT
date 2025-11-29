//TODO: Create thumbnail images, so the user can click on them and see them in a fullscreen format

const fullScreenContainer = document.getElementById("fullscreen-container");
const thumbContainer = document.getElementById("thumbnail-container");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
prevBtn.addEventListener("click", showPrev);
nextBtn.addEventListener("click", showNext);
let currentImg = 0;

//STEP 1: store image data
const imageData = [
    {
        imageName: "img-one",
        imageSrc: "./images/image-one.jpg",
        imageAlt: "mountain lake"
    },
    {
        imageName: "img-two",
        imageSrc: "./images/image-two.jpg",
        imageAlt: "misty woodland"
    },
    {
        imageName: "img-three",
        imageSrc: "./images/image-three.jpg",
        imageAlt: "mountain pass",
    },
];

const objL = imageData.length;

//STEP 2: create thumbnail images
function createThumbnails() {
    for (let i = 0; i < objL; i++) {
        const img = document.createElement("img");
        img.src = imageData[i].imageSrc;
        img.alt = imageData[i].imageAlt;
        img.id = imageData[i].imageName;
        img.className = "ri";
        img.title = imageData[i].imageAlt;
        img.addEventListener("click", () => { createFullscreenImage(i); });
        thumbContainer.appendChild(img);
    }
}

//STEP 3: create fullscreen images
function createFullscreenImage(i) {
    fullScreenContainer.innerHTML = "";
    const fullImg = document.createElement("img");
    fullImg.src = imageData[i].imageSrc;
    fullImg.alt = imageData[i].imageAlt;
    fullImg.className = "ri";
    fullImg.ariaLabel = "alternating image";
    fullScreenContainer.appendChild(fullImg);
    console.log(fullImg);
}

function showPrev() {
    if (currentImg === 0) { // wrap to last image in object 
        currentImg = objL;
    }
    currentImg--;
    createFullscreenImage(currentImg);
}

function showNext() {
    currentImg++;
    if (currentImg === objL) { // wrap to first image in object
        currentImg = 0;
    }
    createFullscreenImage(currentImg);
}

createThumbnails();
createFullscreenImage(currentImg);

// 37 ArrowLeft
// 39 ArrowRight
// keydown Event // key property

document.addEventListener("keyup", (e) => {
  if (!e.repeat) {
    // console.log(e.key);
    switch(e.key) {
        case "ArrowLeft": showPrev()
        break;
        case "p": showPrev()
        break;
        case "ArrowRight": showNext()
        break;
        case "n": showNext();
    }
  }
});