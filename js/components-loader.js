/**
 * Reusable Header & Footer Loader
 * Include this script in your HTML pages to automatically load header and footer components
 * Usage: 
 *   - Add placeholder divs: <div id="navbar-placeholder"></div> and <div id="footer-placeholder"></div>
 *   - Include this script: <script src="js/components-loader.js"></script>
 */

(function() {
  'use strict';

  // Load Header Component
  function loadHeader() {
    const navPlaceholder = document.getElementById('navbar-placeholder');
    if (navPlaceholder) {
      fetch('includes/header.html')
        .then(response => response.text())
        .then(data => {
          navPlaceholder.innerHTML = data;
          setActiveNavLink(window.location.pathname);
        })
        .catch(error => console.error('Error loading header:', error));
    }
  }

  // Load Footer Component
  function loadFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
      fetch('includes/footer.html')
        .then(response => response.text())
        .then(data => {
          footerPlaceholder.innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
    }
  }

  // Set active navigation link based on current page
  function setActiveNavLink(pathname) {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href && (pathname.includes(href) || (pathname === '/' && href === 'index.html'))) {
        link.parentElement.classList.add('active');
      }
    });
  }

  // Load both components when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      loadHeader();
      loadFooter();
    });
  } else {
    loadHeader();
    loadFooter();
  }
})();
