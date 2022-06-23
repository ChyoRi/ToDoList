const backArray = [
    'background01.jpg',
    'background02.jpg',
    'background03.jpg',
    'background04.jpg',
    'background05.png'
];
const wrap = document.querySelector('.wrap');
const randomBtn = document.querySelector('.random');

let backImage = Math.floor(Math.random() * backArray.length);
wrap.style.backgroundImage = `url('../images/${backArray[backImage]}')`;

function raddomImage() {
    wrap.style.backgroundImage = `url('../images/${backArray[backImage]}')`;
}

randomBtn.addEventListener('click', raddomImage);