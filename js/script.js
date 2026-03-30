document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for Animation on Scroll
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate').forEach(el => {
    observer.observe(el);
  });

  // Contact Form Handling
  const contactForm = document.getElementById('portfolio-contact');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Simulate form submission
      contactForm.style.transition = 'opacity 0.5s ease';
      contactForm.style.opacity = '0';
      
      setTimeout(() => {
        contactForm.style.display = 'none';
        const successMessage = document.getElementById('form-success');
        if (successMessage) {
          successMessage.style.display = 'block';
          successMessage.classList.add('animate');
        }
      }, 500);
      
      console.log('Form submitted successfully');
    });
  }

  // Smooth Scrolling for Anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
