/* eslint-disable no-new */
import '../scss/app.scss';
import 'swiper/swiper.min.css';
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';

import './header';

import ItcAccordion from './accordion';

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.tips__slider', {
    modules: [Autoplay, Pagination, Navigation],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      hiddenClass: 'swiper-button-hidden',
      enabled: false,
    },
    slidesPerView: 1,
    centeredSlides: false,
    initialSlide: 0,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1050: {
        slidesPerView: 3,
        centeredSlides: true,
        initialSlide: 1,
      },
      650: {
        slidesPerView: 2,
        navigation: {
          enabled: true,
        },
      },
    },
  });

  new Swiper('.rooms__slider', {
    modules: [Pagination, Navigation],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 24,
    initialSlide: 0,
    centeredSlides: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      510: {
        slidesPerView: 'auto',
        initialSlide: 1,
      },
    },
  });

  new Swiper('.main__slider', {
    modules: [Autoplay, Pagination, Navigation],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 32,
    slidesPerView: 1,
    centeredSlides: true,
    autoHeight: true,
    pagination: {
      el: '.swiper-pagination-adaptive',
      clickable: true,
    },
    breakpoints: {
      1400: {
        centeredSlides: false,
        slidesOffsetBefore: 370,
        slidesOffsetAfter: 70,
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
        },
      },
      1050: {
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
        },
      },
    },
  });

  new ItcAccordion('#acc1', {
    enabled: window.innerWidth <= 550,
  });
});
