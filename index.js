console.log('Hello World')

function openMenu() {
    document.body.classList.toggle("menu--open");
}

function closeMenu() {
    document.body.classList.remove("menu--open");
}

document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger__menu');
    const closeButton = document.querySelector('.burger__menu--close');
    const menuLinks = document.querySelectorAll('.menu__link');

    burgerMenu.addEventListener('click', openMenu);
    closeButton.addEventListener('click', closeMenu);
    menuLinks.forEach(link => link.addEventListener('click', closeMenu));
});
