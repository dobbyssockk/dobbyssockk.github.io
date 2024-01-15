'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu');
    const menuOpen = document.querySelector('.hamburger');
    const menuClose = document.querySelector('.menu__close');
    const overlay = document.querySelector('.menu__overlay');

    menuOpen.addEventListener('click', () => {
        menu.classList.add('active');
    });

    menuClose.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    overlay.addEventListener('click', () => {
        menu.classList.remove('active');
    })

    const counters = document.querySelectorAll('.progress__item-percentage');
    const bars = document.querySelectorAll('.progress__item-bar span');

    counters.forEach((count, i) => {
        bars[i].style.width = count.textContent;
    });

    window.onbeforeunload = () => {
        for(const form of document.getElementsByTagName('form')) {
            form.reset();
        }
    }
});