const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  slidesPerView: 1.2,
  spaceBetween: 10,

  breakpoints: {
    0: {
      slidesPerView: 1.3,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 1.3,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 1.3,
      spaceBetween: 10,
    },
  },

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

function handleSwiperOnResize() {
  console.log("resize");
  if (window.innerWidth >= 768) {
    swiper.disable();
  } else {
    swiper.enable();
  }
}

handleSwiperOnResize();

window.addEventListener("resize", handleSwiperOnResize);
