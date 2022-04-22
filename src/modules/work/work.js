const work = new Swiper('.work .swiper-container', {
  speed: 400,
  loop: true,
  slidesPerView: 1,
  // breakpoints: {
  //   1024: {
  //     allowTouchMove: true,
  //   },
  // },
  navigation: {
    nextEl: '.work .swiper-btn_next',
    prevEl: '.work .swiper-btn_prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});

const workshop = new Swiper('.workshop .swiper-container', {
  speed: 400,
  loop: true,
  spaceBetween: 15,
  slidesPerView: 'auto',
  centeredSlides: true,
  // breakpoints: {
  //   1024: {
  //     allowTouchMove: true,
  //   },
  // },
  navigation: {
    nextEl: '.swiper-btn_next',
    prevEl: '.swiper-btn_prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});

