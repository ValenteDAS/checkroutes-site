document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

document.getElementById('mobile-menu-btn')?.addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});

document.querySelector('form')?.addEventListener('submit', async e => {
  e.preventDefault();
  const name = document.getElementById('name')?.value;
  const email = document.getElementById('email')?.value;
  const company = document.getElementById('company')?.value;
  if (!name || !email || !company) {
    alert('Por favor, completa todos los campos.');
    return;
  }
  try {
    const response = await fetch('/submit-demo', { method: 'POST', body: new FormData(e.target) });
    alert(response.ok ? '¡Gracias! Te contactaremos pronto para programar tu demo.' : 'Error al enviar. Inténtalo de nuevo.');
  } catch {
    alert('Error de conexión. Inténtalo de nuevo.');
  }
});

document.querySelectorAll('.cta-button').forEach(button => {
  button.addEventListener('click', () => {
    window.location.href = '/signup';
  });
});
