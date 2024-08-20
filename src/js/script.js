// element
const banner = document.querySelector('.banners');
const banners = document.querySelector('.banner');
const fruits = document.querySelectorAll('.fruits'); 
const product = document.querySelector('.product-item');
const products = document.querySelectorAll('.product');
const sodas = document.querySelectorAll('.soda'); 
const titles = document.querySelectorAll('.banner h1');
const sliderItens = document.querySelectorAll('.slider-item');

// var
let menu = 0;

// function
const AngleImages = () => {
    document.querySelectorAll('img').forEach((img) => {
        let angle = Math.floor(Math.random() * 360);
        img.style.transform = `rotate(${angle}deg)`;
    });
}

const updateBanners = () => {
    sodas.forEach((soda) => soda.classList.remove('actived'));
    fruits.forEach((fruit) => fruit.style = `animation: none`);
    titles.forEach((title) => title.classList.remove('tracking-in-expand'));
    sliderItens.forEach((sliderItem) => sliderItem.classList.remove('actived'));

    menu++;
    if (menu >= 3) {
        menu = 0;
    }

    banner.style = `margin-left: ${(menu * -100)}vw;`;
    product.style = `margin-left: ${(menu * -250)}px;`;
    fruits[menu].style = `animation: fruitOut 1.5s ease forwards;`;
    sodas[menu].classList.add('actived');
    titles[menu].classList.add('tracking-in-expand');
    sliderItens[menu].classList.add('actived');
}

// init
window.addEventListener('load', () => Promise.all([
    AngleImages(),
    fruits[menu].style = `animation: fruitOut 1.5s ease forwards;`,
    titles[menu].classList.add('tracking-in-expand'),
    setTimeout(() => setInterval(() => updateBanners(), 3500), 3500),
]));


