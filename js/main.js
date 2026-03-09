/* ========================================
   MAIN.JS — Site Interactions
   Mobile menu, scroll header, form validation
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile Menu Toggle ---
  const toggle = document.querySelector('.header__toggle');
  const nav = document.querySelector('.header__nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      toggle.classList.toggle('is-active', isOpen);
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a nav link is clicked
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        toggle.classList.remove('is-active');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.classList.remove('is-active');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }


  // --- Active Nav Link ---
  const currentPath = window.location.pathname;
  document.querySelectorAll('.header__nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && currentPath.endsWith(href.replace(/^\.\.\//, ''))) {
      link.classList.add('active');
    }
  });


  // --- Header Scroll Effect ---
  const header = document.querySelector('.header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // Run on load in case page is already scrolled
  }


  // --- Form Validation ---
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const groups = form.querySelectorAll('.form-group');
      let firstError = null;

      groups.forEach(group => {
        const input = group.querySelector('input, textarea, select');
        if (!input) return;

        // Clear previous state
        group.classList.remove('has-error', 'has-success');

        // Check required fields
        if (input.hasAttribute('required') && !input.value.trim()) {
          group.classList.add('has-error');
          if (!firstError) firstError = input;
          return;
        }

        // Check email format
        if (input.type === 'email' && input.value.trim()) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(input.value.trim())) {
            group.classList.add('has-error');
            if (!firstError) firstError = input;
            return;
          }
        }

        // Mark valid filled fields
        if (input.value.trim()) {
          group.classList.add('has-success');
        }
      });

      if (firstError) {
        firstError.focus();
        return;
      }

      // All valid — show inline success message
      const successEl = form.parentElement.querySelector('.form-success');
      if (successEl) {
        form.style.display = 'none';
        successEl.classList.add('is-visible');
        successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        // Fallback if no success element exists
        form.reset();
        groups.forEach(g => g.classList.remove('has-success'));
      }
    });
  });

});
