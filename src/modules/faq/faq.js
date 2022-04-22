$('.faq__item').click(function(){
  if(!$(this).hasClass('active')){
    $(this).addClass('active').siblings().removeClass('active');
    $('.faq__bottom').slideUp();
    $(this).find('.faq__bottom').slideDown();
  }
})