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
  shortSwipes: false,
  navigation: {
    nextEl: '.swiper-admin-file-next',
    prevEl: '.swiper-admin-file-prev',
  },
  breakpoints: {
    1260: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 30
    }
  },
});
var galleryTop = new Swiper('.gallery-top-admin-file_upload', {
  slidesPerView: 1,
  simulateTouch: false,
  spaceBetween: 10,
  allowTouchMove: false,
  thumbs: {
    swiper: galleryThumbs
  }
});
