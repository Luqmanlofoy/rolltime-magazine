document.addEventListener('DOMContentLoaded', function() {
  const header = document.getElementById('main-header');
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.getElementById('main-nav');
  let lastScroll = 0;
  
  // Mobile menu toggle functionality
  mobileToggle.addEventListener('click', function() {
    // Toggle menu active state
    nav.classList.toggle('active');
    header.classList.toggle('menu-open');
    
    // Toggle hamburger animation
    this.classList.toggle('active');
    
    // Prevent scrolling when menu is open
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
  });
  
  // Scroll to minimize header (mobile only)
  window.addEventListener('scroll', function() {
    if (window.innerWidth <= 768 && !nav.classList.contains('active')) {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > lastScroll && currentScroll > 100) {
        header.classList.add('minimized');
      } else if (currentScroll < lastScroll) {
        header.classList.remove('minimized');
      }
      
      lastScroll = currentScroll;
    }
  });
  
  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll('#main-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        nav.classList.remove('active');
        header.classList.remove('menu-open');
        mobileToggle.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
});