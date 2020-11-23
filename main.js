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


let imgProductAll = document.getElementsByClassName("listImage");

for( let p = 0 ; p < imgProductAll.length ; p++){
        hoverImgChild(p);
}

function hoverImgChild(imgCurrent){
    let imgProductCurrent = document.querySelector(`.listImage:nth-child(${imgCurrent + 1}) > .image > .image-hover`);
     let imgChildCurrent = document.querySelectorAll(`.listImage:nth-child(${imgCurrent + 1}) > div.product__color > a > img`);
      for(let i = 0 ; i < imgChildCurrent.length ; i++){

           imgChildCurrent[i].addEventListener("mouseover",()=>{
               imgProductCurrent.src = imgChildCurrent[i].src;
           });

      }
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