window.addEventListener('scroll', () => {
  const head = document.querySelector('.header');
  if(window.pageYOffset > 50){
    head.classList.add('fix');
  } else{
    head.classList.remove('fix');
  }
})
window.addEventListener('resize', () => {
})
$('.burger').click(function () {
  if (!$('.burger').hasClass('open')) {
    $('.burger').addClass('open');
    $('.nav-mobile').slideDown()
  } else {
    $('.burger').removeClass('open');
    $('.nav-mobile').slideUp()
  }
})
// $('.header__search').click(function () {
//   if (!$('.header__search').hasClass('open')) {
//     $('.header__search').addClass('open');
//     $('.header__search-form').slideDown();
//   } else {
//     $('.header__search').removeClass('open');
//     $('.header__search-form').slideUp();
//   }
//   if(window.innerWidth < 1023){
//     $('.header__list').removeAttr('style');
//     $('.burger').removeClass('open');
//   }
// })