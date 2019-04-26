import '../lib/selectize.min.js';
// import '../lib/maskedinput.js';
import modal from 'jquery-modal';

//pop-up
$('[rel="modal:open"]').on('click', function(event) {
  $(this).modal({
    fadeDuration: 200
  });
  return false;
});


//process-update select
$('.process-update__filters__select').selectize();


//process_update
$('.file-card__btn--button').on('click', function(event) {
  event.preventDefault();
  if($(this).hasClass('active')) {
    $(this).toggleClass('active');
    $(this).siblings('ul').fadeToggle();
  } else{
    $('.file-card__btn--button').removeClass('active');
    $('.file-card__btn ul').fadeOut();
    $(this).toggleClass('active');
    $(this).siblings('ul').fadeToggle();
  }
});

$(document).mouseup(function(e) {
  var container = $('.file-card__btn');
  if (container.has(e.target).length === 0) {
    $('.file-card__btn--button').removeClass('active');
    $('.file-card__btn ul').fadeOut();
  }
});
