(function() {
  function initAccordion() {
    const accordion = document.getElementById('faqAccordion');
    if (!accordion) return;

    const buttons = accordion.querySelectorAll('[data-accordion-toggle]');

    buttons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        const body = this.nextElementSibling;
        const isActive = this.classList.contains('active');

        buttons.forEach(btn => {
          btn.classList.remove('active');
          btn.nextElementSibling.classList.remove('show');
        });

        if (!isActive) {
          this.classList.add('active');
          body.classList.add('show');
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAccordion);
  } else {
    initAccordion();
  }
})();
