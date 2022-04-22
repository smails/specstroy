const vantage = new Swiper('.vnt .swiper-container', {
  speed: 400,
  loop: true,
  slidesPerView: 1,
  effect: 'fade',
  allowTouchMove: false,
  fadeEffect: {
    crossFade: true
  },
  breakpoints: {
    1024: {
      allowTouchMove: true,
    },
  },
  pagination: {
    el: '.vnt__pagination',
    clickable: true,
    renderBullet: function (index, className) {
      let numb;
      if(index < 9){
        numb = '0' + (index + 1);
      } else {
        numb = index++;
      }
      return '<span class="' + className + '">' + numb + '</span>';
    },
  },
});

