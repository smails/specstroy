const cases = new Swiper('.case .swiper-container', {
  speed: 400,
  loop: true,
  slidesPerView: 2,
  spaceBetween: 40,
  breakpoints: {
    1023: {
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: '.case .swiper-btn_next',
    prevEl: '.case .swiper-btn_prev',
  },
});