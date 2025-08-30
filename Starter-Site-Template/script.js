// Simple scroll animation for sections
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if(scrollY >= sectionTop - window.innerHeight / 1.5 && scrollY < sectionTop + sectionHeight) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
      section.style.transition = 'all 0.6s ease-out';
    } else {
      section.style.opacity = 0.5;
      section.style.transform = 'translateY(50px)';
    }
  });
});

// Optional: simple form submission alert
const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks for your message! This is a demo form.');
  form.reset();
});
