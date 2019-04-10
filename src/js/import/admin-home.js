


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
