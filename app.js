const burger = document.querySelector('.burger');
const ulNavLinks = document.querySelector('.nav-links');
const liNavLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {

    //toggle nav
    ulNavLinks.classList.toggle('nav-active');

    //animate links
    liNavLinks.forEach((li, index) =>{
        if (li.style.animation) {
            li.style.animation = '';
        } else {
            li.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    //burger animation
    burger.classList.toggle('toggle');
});


