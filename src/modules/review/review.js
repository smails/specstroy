const review = new Swiper('.review .swiper-container', {
  speed: 400,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    1023: {
      slidesPerView: 2,
    },
    575: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});