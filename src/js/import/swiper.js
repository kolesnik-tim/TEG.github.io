import Swiper from 'swiper';


//admin-file_upload
// var swiper = new Swiper('.swiper-admin-file', {
//   slidesPerView: 4,
//   spaceBetween: 30,
//   navigation: {
//     nextEl: '.swiper-admin-file-next',
//     prevEl: '.swiper-admin-file-prev',
//   },
//   breakpoints: {
//     1024: {
//       slidesPerView: 1,
//       spaceBetween: 30
//     }
//   }
// });



var galleryThumbs = new Swiper('.swiper-admin-file', {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-admin-file-next',
    prevEl: '.swiper-admin-file-prev',
  },
});
var galleryTop = new Swiper('.gallery-top-admin-file_upload', {
  slidesPerView: 1,
  spaceBetween: 10,
  thumbs: {
    swiper: galleryThumbs
  }
});
