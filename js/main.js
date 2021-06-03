// ПОКАЗАТЬ/СКРЫТЬ МЕНЮ
const body = document.querySelector('body'),
      menu = document.querySelector('.nav-menu'),
      menuOpen = document.querySelector('.nav-burger'),
      menuClose = document.querySelector('.nav-menu-close');

menuOpen.addEventListener('click', () => {
  menu.classList.add('_show');
  body.classList.add('_lock');
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('_show');
  body.classList.remove('_lock');
});

// ПОКАЗЫВАЕТ СТРЕЛКУ "НАВЕРХ" ПРИ СКРОЛЛЕ РАВНОМУ ВЫСОТЕ ЭКРАНА
const windowHeight = document.querySelector('html').clientHeight, // высота экрана
      arrowUp = document.querySelector('.arrow-up');

window.addEventListener('scroll', function() {
  if (window.pageYOffset >= windowHeight ) {
    arrowUp.classList.add('_show');
  }
  if (window.pageYOffset <= windowHeight ) {
    arrowUp.classList.remove('_show');
  }
});

// ПЕРЕМОТКА НАВЕРХ ПРИ КЛИКЕ ПО СТРЕЛКЕ "НАВЕРХ"
arrowUp.addEventListener('click', () => {
  window.scrollBy(0,-window.pageYOffset);
});

// СЛАЙДЕР В РАЗДЕЛЕ "СКУТЕРЫ В НАЛИЧИИ"
const swiper = new Swiper('.scooter-slider', {

  slidesPerView: "auto",
  spaceBetween: 32,
  centeredSlides: true,

  navigation: {
    prevEl: '.scooter-slider-btn-prev',
    nextEl: '.scooter-slider-btn-next',
  }

});

// АККОРДЕОН В РАЗДЕЛЕ "ЦЕНЫ И УСЛОВИЯ"
const priceBtn = document.querySelectorAll('.price__tab-btns-button'),
      priceValue = document.querySelector('.price__tab-prices-item');


for (let i = 0; i < priceBtn.length; i++) {
  priceBtn[i].addEventListener('click', () => {

    for (let i = 0; i < priceBtn.length; i++) {
      priceBtn[i].classList.remove('_show');
      priceValue[i].classList.remove('_show');
    }

    priceBtn[i].classList.add('_show');
    priceValue[i].classList.add('_show');
  });
  
}

