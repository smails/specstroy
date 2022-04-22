const target_block = $('.step');
let blockStep = true;

window.addEventListener('scroll', () => {
  // eslint-disable-next-line camelcase
  if (target_block.length) {
    const se = window.pageYOffset > target_block.offset().top - $(window).height() / 2;
    if (se && blockStep) {
      blockStep = false;
      const comma_separator_number_step = $.animateNumber.numberStepFactories.separator('');
      $(target_block).find('.step__numb').each(function () {
        const numb_end = $(this).find('span').data('numb');
        $(this).find('span').animateNumber({
          number: numb_end,
          easing: 'easeInQuad',
          numberStep: comma_separator_number_step,
        },
        4000);
      });
    }
  }
})