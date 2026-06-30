const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('.nav');
const year = document.getElementById('year');
year.textContent = new Date().getFullYear();

menuToggle?.addEventListener('click', () => {
  nav?.classList.toggle('open');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav?.classList.remove('open'));
});

const accordions = document.querySelectorAll('[data-accordion]');
accordions.forEach(container => {
  const items = container.querySelectorAll('.accordion-item');
  const panels = container.querySelectorAll('.accordion-panel');

  items.forEach((btn, index) => {
    const panel = panels[index];
    const open = btn.classList.contains('is-open');
    if (open) panel.classList.add('open');

    btn.addEventListener('click', () => {
      const isOpen = btn.classList.contains('is-open');
      items.forEach((otherBtn, otherIndex) => {
        otherBtn.classList.remove('is-open');
        panels[otherIndex].classList.remove('open');
      });

      if (!isOpen) {
        btn.classList.add('is-open');
        panel.classList.add('open');
      }
    });
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
