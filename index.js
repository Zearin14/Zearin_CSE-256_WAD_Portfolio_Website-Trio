
// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Light/Dark Mode Toggle
  const toggleButton = document.getElementById('theme-toggle');
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
  });
  
  // Form Validation
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent successfully!');
    this.reset();
  });
  
  // Timeline Animation on Scroll
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  const isInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight * 0.75;
  };
  
  const animateTimeline = () => {
    timelineItems.forEach((item) => {
      const content = item.querySelector('.timeline-content');
      if (isInViewport(content)) {
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
      }
    });
  };
  
  window.addEventListener('scroll', animateTimeline);
  
  // Trigger the animation on page load
  animateTimeline();
  