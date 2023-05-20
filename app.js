var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween:20,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
      720:{
        slidesPerView:2,
        spaceBetween:30,
      },
      1200:{
        slidesPerView:4,
        spaceBetween:50,
      }

    }
  });