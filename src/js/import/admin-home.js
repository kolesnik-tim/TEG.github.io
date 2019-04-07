


//document mouseup
$(document).mouseup(function(e) {
  var container = $('.admin-home__header__notifications ul, .admin-home__header__user ul');
  if (container.has(e.target).length === 0) {
    container.fadeOut();
  }
});
//open dropdown
$('.dropdown-open').on('click', function() {
  $(this).siblings('ul').fadeIn();
});
