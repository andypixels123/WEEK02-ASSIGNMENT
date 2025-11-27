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
    for (i = 0; i < imageData.length; i++) {
        const img = document.createElement("img");
        img.src = imageData[i].imageSrc;
        img.alt = imageData[i].imageAlt;
        img.id = imageData[i].imageName;
        img.addEventListener("click", createFullscreenImage);
        thumbContainer.appendChild(img);
    }
 }
   

    //STEP 3: create fullscreen images
    function createFullscreenImage() {
        fullScreenContainer.innerHTML = ""; // remove image
        //create image
        //update its values (properties)
        //add className for styling (making the image full screen)
        //append the image to the container
        fullScreenContainer.appendChild(img);
    }

//add the createFullscreenImages function as the event handler of the event above
//call the createThumbnails function

createThumbnails();

