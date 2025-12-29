/**
 * @file
 * dr-agency theme JavaScript.
 */

(function (Drupal, once) {
  "use strict";

  Drupal.behaviors.drteacker = {
    attach: function (context, settings) {
      console.log("🎨 drteacker theme loaded!");
      
      // Scroll top button
      let scrollTop = document.querySelector('.scroll-top');
      if (scrollTop) {
        scrollTop.addEventListener('click', (e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }

  

      // Billing toggle
      const toggleBtns = document.querySelectorAll('.toggle-btn');
      const priceElements = document.querySelectorAll('.plan-price');
      toggleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          const billingType = this.dataset.billing;
          toggleBtns.forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          priceElements.forEach(price => {
            const newPrice = price.dataset[billingType];
            price.textContent = newPrice;
          });
        });
      });
    },
  };
})(Drupal, once);
