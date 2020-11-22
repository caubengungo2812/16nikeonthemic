// let menuBar = document.getElementById('navbar');
// let btnMenu = document.querySelector('.menuBar');
// let body = document.querySelector('body')

// btnMenu.addEventListener('click', clickToIcon)

// function clickToIcon(){
	
// 	if(menuBar.className) {
// 		menuBar.classList.toggle('reponsive')
		
// 	}
	
// }

let mobileMode = document.getElementById("menu--mobile");
let modal = document.getElementById("modal");
let navbar__top = document.getElementById("navbar--top");

mobileMode.addEventListener("click",()=>{
	modal.style.display = "block";
	navbar__top.style.display = "block";
});

modal.addEventListener("click",()=>{
	modal.style.display = "none";
	navbar__top.style.display = "none";
});