const body = document.querySelector("body");

const IMAGE_NUM = 5;

function paintImage(number) {
    const image = new Image();
    image.src = `./image/${number}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function generRandom() {
    return Math.floor(Math.random() * IMAGE_NUM);
}

function init() {
    const randomNum = generRandom() + 1;
    if (randomNum === IMAGE_NUM + 1) randomNum = IMAGE_NUM;
    paintImage(randomNum);
}

init();