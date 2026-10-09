// ===== TEMA CLARO/ESCURO =====
const toggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  toggle.querySelector('.pokeball-icon').textContent = '🌙';
}

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  toggle.querySelector('.pokeball-icon').textContent = isDark ? '🌙' : '⚪';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// ===== ANIMAÇÃO DE SCROLL (reveal) =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section, .card, .project-card').forEach((el) => {
  el.classList.add('reveal');
  observer.observe(el);
});

// ===== EASTER EGG POKÉMON =====
let clicks = 0;
const footer = document.querySelector('.footer');
if (footer) {
  footer.addEventListener('click', () => {
    clicks++;
    if (clicks === 3) {
      console.log("%c⚡ Who's that Pokémon? It's CECILIA! ⚡", "font-size:18px; color:#ff6ea5; font-weight:bold;");
      clicks = 0;
    }
  });
}