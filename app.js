//TODO: Create thumbnail images, so the user can click on them and see them in a fullscreen format

//STEP 1: store image data
const imageData = [
    {
        imageName: "img-one",
        imageSrc: "./images/image-one.jpg",
        imageAlt: "alt text",
    },
    {
        imageName: "img-two",
        imageSrc: "./images/image-two.jpg",
        imageAlt: "alt text",
    },
    {
        imageName: "img-three",
        imageSrc: "./images/image-three.jpg",
        imageAlt: "alt text",
    },
];

const fullScreenContainer = document.getElementById("fullscreen-container");
const thumbContainer = document.getElementById("thumbnail-container");

//STEP 2: create thumbnail images
function createThumbnails() {
    for (let i = 0; i < imageData.length; i++) {
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
   function createFullscreenImage(selected) {
        fullScreenContainer.innerHTML = "";
        const fullImg = document.createElement("img");
        fullImg.src = imageData[selected].imageSrc;
        fullImg.alt = imageData[selected].imageAlt;
        fullImg.className = "ri";
        fullScreenContainer.appendChild(fullImg);
    }

createThumbnails();

