var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.25,
  centeredSlides: true,
  spaceBetween: 10,
  grabCursor: true,
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 1.4,
      spaceBetween: 10
    },
    // when window width is >= 1440px
    1440: {
      slidesPerView: 2.55,
      spaceBetween: 30
    }
  }
});

