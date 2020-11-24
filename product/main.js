let mobileMode = document.getElementById("menu--mobile");
let modal = document.getElementById("modal");
let navbar__top = document.getElementById("navbar--top");
let arrowLeft = document.querySelector('.arrowLeft')
let arrowRight = document.querySelector('.arrowRight')
let textContent = document.querySelector('.text__content')
let nextContent = document.querySelector('.nextContent')
let header = document.getElementById('headerGallery');
let btnS = header.getElementsByClassName('select');
    

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

for (let i = 0; i < btnS.length; i++) {
    btnS[i].addEventListener('click', () => {
        let current = document.getElementsByClassName("active-image");
        
        current[0].className = current[0].className.replace(" active-image", " ");
        btnS[i].className += " active-image";
        console.log(current)
    })
}