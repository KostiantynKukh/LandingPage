(function () {
    const burger = document.querySelector('.menu');
    const navList = document.querySelector('.top-nav-list');
    burger.addEventListener('click', burgerActive); 
    function burgerActive () {
        burger.classList.toggle('menu-active');
        navList.classList.toggle('top-nav-list-active');
    }   
}());
