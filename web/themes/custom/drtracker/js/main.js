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



//      
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtns = document.querySelectorAll('.toggle-btn');
  const priceElements = document.querySelectorAll('.plan-price');

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const billingType = this.dataset.billing;

      // Update active button
      toggleBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      // Update prices
      priceElements.forEach(price => {
        const newPrice = price.dataset[billingType];
        price.textContent = newPrice;
      });
    });
  });
});


 document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('[data-accordion-toggle]');

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const body = this.nextElementSibling;
      const isActive = this.classList.contains('active');

      // Close ALL buttons
      buttons.forEach(btn => {
        btn.classList.remove('active');
        btn.nextElementSibling.classList.remove('show');
      });

      // Open clicked if not active
      if (!isActive) {
        this.classList.add('active');
        body.classList.add('show');
      }
    });
  });
});


      

      
    },
  };
})(Drupal, once);
