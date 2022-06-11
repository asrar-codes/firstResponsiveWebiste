let burger = document.querySelector('.burger');
let navbar = document.querySelector('.navbar');
let rightNav = document.querySelector('.rightNav');
let nav_list = document.querySelector('.nav-list');
let logo= document.querySelector('.logo');
burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class');
    nav_list.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
    logo.classList.toggle('v-class');

})