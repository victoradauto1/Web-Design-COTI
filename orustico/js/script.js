// alert('Ok');

var btnMenu = document.querySelector('.btn-menu');
var menu = document.querySelector('.menu');

// console.log(btnMenu);
// console.log(menu);

console.log(btnMenu);

btnMenu.addEventListener('click', function(){
    menu.classList.toggle('menu-open');
    this.classList.toggle('x');
})