let menuBar = document.getElementById('navbar');
let btnMenu = document.querySelector('.menuBar');
let body = document.querySelector('body')

btnMenu.addEventListener('click', clickToIcon)

function clickToIcon(){
	
	if(menuBar.className) {
		menuBar.classList.toggle('reponsive')
		
	}
	
}
