const images = [
    {
        src: "https://picsum.photos/id/1015/700/450",
        caption: "Beautiful Mountain"
    },
    {
        src: "https://picsum.photos/id/1016/700/450",
        caption: "Peaceful Forest"
    },
    {
        src: "https://picsum.photos/id/1018/700/450",
        caption: "Amazing Landscape"
    },
    {
        src: "https://picsum.photos/id/1020/700/450",
        caption: "Nature's Beauty"
    }
];

let currentIndex = 0;
let slideshow = null;

const galleryImage = document.getElementById("galleryImage");
const caption = document.getElementById("caption");
const imageNumber = document.getElementById("imageNumber");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const playBtn = document.getElementById("playBtn");
const dotsContainer = document.getElementById("dots");

function showImage() {
    galleryImage.src = images[currentIndex].src;
    galleryImage.alt = images[currentIndex].caption;
    caption.innerText = images[currentIndex].caption;

    imageNumber.innerText =
        "Image " + (currentIndex + 1) + " of " + images.length;

    const dots = dotsContainer.querySelectorAll(".dot");

    dots.forEach(function (dot, index) {
        dot.classList.toggle("active", index === currentIndex);
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
}

function previousImage() {
    currentIndex =
        (currentIndex - 1 + images.length) % images.length;
    showImage();
}

function createDots() {
    images.forEach(function (image, index) {
        const dot = document.createElement("button");

        dot.classList.add("dot");
        dot.setAttribute("aria-label", "Show image " + (index + 1));

        dot.addEventListener("click", function () {
            currentIndex = index;
            showImage();
        });

        dotsContainer.appendChild(dot);
    });
}

function toggleSlideshow() {
    if (slideshow === null) {
        slideshow = setInterval(nextImage, 3000);
        playBtn.innerText = "Pause Slideshow";
    } else {
        clearInterval(slideshow);
        slideshow = null;
        playBtn.innerText = "Play Slideshow";
    }
}

nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", previousImage);
playBtn.addEventListener("click", toggleSlideshow);

createDots();
showImage();
