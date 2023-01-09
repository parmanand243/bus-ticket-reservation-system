const navContainer=document.querySelector('.ul_container_mobile');
const Hamburger = document.querySelector('.mobile_navbar_container');
const closeBtn = document.querySelector('.close_btn');
const navBtns = document.querySelectorAll('.nav_btns');

Hamburger.addEventListener('click', function(){
navContainer.classList.add('active')
})
closeBtn.addEventListener('click', function(){
navContainer.classList.remove('active')
})
