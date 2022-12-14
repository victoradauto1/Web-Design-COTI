
var header = document.querySelector('.header');
var btnMenu = document.querySelector('.btn-menu');
var menu = document.querySelector('.menu');

// console.log(header);

//ao rolar o scroll
window.addEventListener('scroll', function(){
    // console.log('rolou')

    if(this.window.scrollY > 50){
        header.classList.add('header-fixed');
    }
    else{
        header.classList.remove('header-fixed');
    }
})

btnMenu.addEventListener('click', function(){
    
    this.classList.toggle('x')
    menu.classList.toggle('menu-open');

})

