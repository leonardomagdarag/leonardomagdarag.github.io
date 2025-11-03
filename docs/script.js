// Zoom-in and zoom-out animation with staggered delay
const animatedElements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const el = entry.target;
      if (entry.isIntersecting) {
        // Add random stagger delay for smooth effect
        const delay = Math.random() * 0.4; // between 0–0.4 seconds
        el.style.transitionDelay = `${delay}s`;
        el.classList.add('visible');
      } else {
        el.style.transitionDelay = '0s';
        el.classList.remove('visible');
      }
    });
  },
  { threshold: 0.2 }
);

animatedElements.forEach(el => observer.observe(el));

//

// Typing effect for the header
const title = document.querySelector('.first-name');
  setTimeout(() => {
    title.classList.add('typing-done');
    document.querySelector('.last-name').classList.add('animate-typing');
}, 2000); // matches typing duration on styles

const title2 = document.querySelector('.last-name');
  setTimeout(() => {
    title2.classList.add('typing-done');
}, 4000); // matches typing duration on styles
// 

