document.addEventListener('DOMContentLoaded', function() {
  const header = document.getElementById('main-header');
  let lastScroll = 0;
  
  // For mobile minimizing effect
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (window.innerWidth <= 768) { // Only for mobile
      if (currentScroll > lastScroll && currentScroll > 100) {
        // Scroll down - minimize
        header.classList.add('minimized');
      } else if (currentScroll < lastScroll) {
        // Scroll up - restore
        header.classList.remove('minimized');
      }
    }
    
    lastScroll = currentScroll;
  });
  
  // Optional: Hamburger menu functionality
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', function() {
      const nav = document.querySelector('nav');
      nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });
  }
});

// Update the click handler
mobileToggle.addEventListener('click', function() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('active');
});