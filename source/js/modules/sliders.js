/* eslint-disable */

const equipmentSlider = () => {
  const mySwiper = new Swiper(`.equipment__slider`, {
    navigation: {
      nextEl: `.equipment__button--next`,
      prevEl: `.equipment__button--prev`,
    },

    autoheight: true,

    slidesPerView: `auto`,
    watchOverflow: true,
  });
};

const promotionSlider = () => {
  const mySwiper = new Swiper(`.promotion__slider`, {
    navigation: {
      nextEl: `.promotion__button--next`,
      prevEl: `.promotion__button--prev`,
    },

    pagination: {
      el: `.promotion__pagination`,
      clickable: true,
    },

    autoheight: true,
    watchOverflow: true,
    loop: true,
    slidesPerView: `auto`,
  });
};

const catalogSlider = () => {
  const mySwiper = new Swiper(`.catalog__slider`, {
    navigation: {
      nextEl: `.catalog__button--next`,
      prevEl: `.catalog__button--prev`,
    },
    watchOverflow: true,
    loop: true,
    slidesPerView: `auto`,
    breakpoints: {
      300: {
        spaceBetween: 0,
        centeredSlides: true,
      },
      750: {
        spaceBetween: 38,
        centeredSlides: false,
      },
      970: {
        spaceBetween: 27,
      },
    }
  });
};

const promoSlider = () => {
  const mySwiper = new Swiper(`.promo__slider`, {
    navigation: {
      nextEl: `.promo__button--next`,
      prevEl: `.promo__button--prev`,
    },

    watchOverflow: true,
    loop: true,
    slidesPerView: `auto`,
    breakpoints: {
      300: {
        spaceBetween: 0,
        centeredSlides: true,
      },
      750: {
        slidesPerView: `auto`,
        spaceBetween: 38,
        centeredSlides: false,
      },
      970: {
        spaceBetween: 27,
      },
    }
  });
};

export {equipmentSlider, promotionSlider, catalogSlider, promoSlider};

/* eslint-disable */
