/**
 * @file
 * dr-agency theme JavaScript.
 */
(function (Drupal, once) {
  "use strict";
  
  Drupal.behaviors.drtracker = {
    attach: function (context, settings) {
      console.log("🎨 drtracker theme loaded!");
      
      // Scroll top button
      let scrollTop = document.querySelector('.scroll-top');
      if (scrollTop) {
        // Click handler
        scrollTop.addEventListener('click', (e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
        // Scroll visibility
        function toggleScrollTop() {
          if (window.scrollY > 100) {
            scrollTop.classList.add('active');
          } else {
            scrollTop.classList.remove('active');
          }
        }
        
        window.addEventListener('scroll', toggleScrollTop);
        toggleScrollTop(); // Initial check
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
