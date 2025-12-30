document.addEventListener('DOMContentLoaded', function() {
  const testimonialSlider = document.querySelector('.testimonial-slider');
  
  if (testimonialSlider && typeof Swiper !== 'undefined') {
    new Swiper('.testimonial-slider', {
      slidesPerView: 3,
      spaceBetween: 20,
      grid: {
        rows: 2,
         fill: 'row',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          grid: { rows: 1 },
        },
        768: {
          slidesPerView: 2,
          grid: { rows: 2 },
        },
        1024: {
          slidesPerView: 3,
          grid: { rows: 2 },
        },
      },
    });
  }
});
