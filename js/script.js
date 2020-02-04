window.addEventListener('DOMContentLoaded',function() {
    'use strict';

    let slideIndex = 1,
        slides = document.querySelectorAll('.slider__item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function addSlides(n) {
        showSlides(slideIndex += n);        
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        addSlides(-1);
    });
    next.addEventListener('click', function() {
        addSlides(+1);
    });

    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    });

    showSlides();

    let burger = document.querySelector('.header__burger'),
        menu = document.querySelector('.menu');

    burger.addEventListener('click', function() {
        this.classList.toggle('active');
        menu.classList.toggle('active');
        document.body.classList.toggle('lock');
    });


    

});

