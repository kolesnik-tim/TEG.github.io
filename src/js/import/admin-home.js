


//document mouseup
$(document).mouseup(function(e) {
  var container = $('.admin-home__header__notifications__drop-down, .admin-home__header__user__drop-down');
  if (container.has(e.target).length === 0) {
    container.fadeOut();
  }
});
//open dropdown
$('.dropdown-open').on('click', function() {
  $(this).siblings('.admin-home__header__notifications__drop-down, .admin-home__header__user__drop-down').fadeIn();
});

//aside open
$('.aside').hover(function() {
  $(this).addClass('active');
}, function() {
  $(this).removeClass('active');
});
$('.aside__menu__item--drop-down').on('click', function() {
  $(this).toggleClass('active');
  $(this).siblings('ul').slideToggle();
});
