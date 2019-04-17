

//select page
$('.gallery-top__slide__title__select').selectize();


//admin-file_upload__log
//admin-file_upload__log open
$('.admin-file_upload__log--open').on('click', function() {
  $('.admin-file_upload__log').addClass('is-active');
  $('.admin-file_upload__log--bg').fadeIn();
});


//admin-file_upload__log close
$('.pop-up__exit__btn--exit').on('click', function() {
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
