let mobileMode = document.getElementById("menu--mobile");
let modal = document.getElementById("modal");
let navbar__top = document.getElementById("navbar--top");
let arrowLeft = document.querySelector('.arrowLeft')
let arrowRight = document.querySelector('.arrowRight')
let textContent = document.querySelector('.text__content')
let nextContent = document.querySelector('.nextContent')
let btnFilter = document.querySelector('.filter__right__text')
let visibleFilter = document.querySelector('.filter__sub-menu')
let triangle = document.querySelector('.triangle')
let navbarFilter = document.querySelector('.nav__filter')
let body = document.querySelector('body')
let textFilter = document.querySelector('.text__filter')
let image = document.getElementsByClassName('setColor');
let imgProduct = document.getElementById('imgProduct');
let imgProduct2 = document.getElementById('imgProduct-2');
let imgProduct3 = document.getElementById('imgProduct-3');
let imgProduct4 = document.getElementById('imgProduct-4');
let imgProduct5 = document.getElementById('imgProduct-5');
let imgProduct6 = document.getElementById('imgProduct-6');
let imgProduct7 = document.getElementById('imgProduct-7');
let imgProduct8 = document.getElementById('imgProduct-8');
let imgProduct9 = document.getElementById('imgProduct-9');



for (let i = 0; i < image.length; i++) {
    image[i].addEventListener("mouseover", () => {
        imgProduct.src = image[i].src;
    });
}
for (let i = 0; i < image.length; i++) {
    image[i].addEventListener("mouseover", () => {
        imgProduct2.src = image[i].src;
    });
}

for (let i = 0; i < image.length; i++) {
    image[i].addEventListener("mouseover", () => {
        imgProduct3.src = image[i].src;
    });
}

for (let i = 0; i < image.length; i++) {
    image[i].addEventListener("mouseover", () => {
        imgProduct4.src = image[i].src;
    });
}

for (let i = 0; i < image.length; i++) {
    image[i].addEventListener("mouseover", () => {
        imgProduct5.src = image[i].src;
    });
}

for (let i = 0; i < image.length; i++) {
    image[i].addEventListener("mouseover", () => {
        imgProduct6.src = image[i].src;
    });
}

for (let i = 0; i < image.length; i++) {
    image[i].addEventListener("mouseover", () => {
        imgProduct7.src = image[i].src;
    });
}

for (let i = 0; i < image.length; i++) {
    image[i].addEventListener("mouseover", () => {
        imgProduct8.src = image[i].src;
    });
}

for (let i = 0; i < image.length; i++) {
    image[i].addEventListener("mouseover", () => {
        imgProduct9.src = image[i].src;
    });
}



mobileMode.addEventListener("click", () => {
    modal.style.display = "block";
    navbar__top.style.display = "block";
});

modal.addEventListener("click", () => {
    modal.style.display = "none";
    navbar__top.style.display = "none";
});

arrowLeft.addEventListener('click', () => {
    textContent.classList.toggle('moveLeft')
    nextContent.classList.toggle('moveRight')
    textContent.classList.remove('reverseMoveLeft')
    textContent.classList.remove('reverseMoveRight')

})

arrowRight.addEventListener('click', () => {
    textContent.classList.toggle('moveLeft')
    nextContent.classList.toggle('moveRight')
    textContent.classList.remove('reverseMoveLeft')
    textContent.classList.remove('reverseMoveRight');

})

btnFilter.addEventListener('click', () => {
    visibleFilter.classList.toggle('show')
})

window.addEventListener('scroll', () => {
    if (window.pageYOffset > navbarFilter.offsetTop) {
        navbarFilter.classList.add('scrollFilter')
        textFilter.style.fontSize = '1.5rem'

    } else {
        navbarFilter.classList.remove('scrollFilter')
        textFilter.style.fontSize = '2rem'
    }
})