/**
 * @file
 * dr-agency theme JavaScript.
 */

(function (Drupal, once) {
  "use strict";

  const swiper = new Swiper(".testimonial-slider", {
    loop: true,
    spaceBetween: 30,
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
    },
  });

  Drupal.behaviors.drteacker = {
    attach: function (context, settings) {
      // Restul comportamentului tău
      if (!document.body.classList.contains("drteacker-loaded")) {
        console.log("🎨 drteacker theme loaded successfully!");
        document.body.classList.add("drteacker-loaded");
      }


/**
   * Scroll top button
   */
let scrollTop = document.querySelector('.scroll-top');

function toggleScrollTop() {
  if (scrollTop) {
    window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
  }
}
scrollTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
window.addEventListener('load', toggleScrollTop);
document.addEventListener('scroll', toggleScrollTop);




    },







  };
})(Drupal, once);
