

//select page
$('.gallery-top__slide__table__title__select').selectize();


//admin-file_upload__log
//admin-file_upload__log open
$('.admin-file_upload__log--open').on('click', function() {
  $('.admin-file_upload__log').addClass('is-active');
  $('.admin-file_upload__log--bg').fadeIn();
});


//admin-file_upload__log close
$('.admin-file_upload__log__title__text a, .admin-file_upload__log--bg').on('click', function() {
  $('.admin-file_upload__log').removeClass('is-active');
  $('.admin-file_upload__log--bg').fadeOut();
});


//select admin-file_upload__log
$('.admin-file_upload__log__select').selectize();


//checkbox
$('.table__checkbox input').on('click', function() {
  if($(this).is(':checked')) {
    $(this).closest('tr').addClass('is-active');
  } else{
    $(this).closest('tr').removeClass('is-active');
  }
});
