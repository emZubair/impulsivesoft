
// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Initialize animations for elements in viewport
  animateOnScroll();
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileNav = document.querySelector('.mobile-nav');

mobileMenuBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
});

// Close mobile menu when clicking a nav link
const mobileNavLinks = document.querySelectorAll('.mobile-nav .nav-link, .mobile-nav .contact-btn');
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('active');
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for navbar height
        behavior: 'smooth'
      });
    }
  });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
    };
    
    // Here you would normally send the data to a server
    // For static site, we'll just log it and show a success message
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    contactForm.reset();
  });
}

// Simple animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.service-card, .feature-card, .testimonial-card, .stat-item, .image-card');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (elementPosition < screenPosition) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

// Set initial styles for animation
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.service-card, .feature-card, .testimonial-card, .stat-item, .image-card');
  
  elements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  // Trigger animation for elements in viewport on page load
  animateOnScroll();
});

// Listen for scroll events to trigger animations
window.addEventListener('scroll', animateOnScroll);
