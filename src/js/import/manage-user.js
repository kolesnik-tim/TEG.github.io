//input name-search
$('#table__name-search').focus(function() {
  $(this).addClass('is-active');
  $(this).attr('placeholder', 'search name');
});
$('#table__name-search').focusout(function() {
  $(this).removeClass('is-active');
  $(this).attr('placeholder', 'name');
});

//drop-down open
$('.drop-down--open').on('click', function(e) {
  e.preventDefault();
  $(this).find('ul').fadeIn();
});
//document mouseup
$(document).mouseup(function(e) {
  var container = $('.manage__header__notifications ul, .manage__header__user ul, .table__drop-down ul');
  if (container.has(e.target).length === 0) {
    container.fadeOut();
  }
});



//Create Event
//open
$('.admin-home__title a').on('click', function(e) {
  e.preventDefault();
  $('.manage__create').addClass('is-active');
  $('.manage__create--bg').fadeIn();
});
//close
$('.manage__create__close, .manage__create--bg').on('click', function(e) {
  e.preventDefault();
  $('.manage__create').removeClass('is-active');
  $('.manage__create--bg').fadeOut();
});
