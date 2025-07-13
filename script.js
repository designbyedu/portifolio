document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
      toggle.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });

    // Fecha o menu ao clicar em um link
    menu.querySelectorAll('.menu-link').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('active');
        toggle.classList.remove('active');
        document.body.classList.remove('menu-open');
      });
    });
  }

  // WhatsApp form
  const form = document.getElementById('form');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const nome = document.getElementById('nome').value.trim();
      const mensagem = document.getElementById('mensagem').value.trim();
      if (!nome || !mensagem) {
        alert('Por favor, preencha todos os campos.');
        return;
      }
      const telefone = WHATSAPP_NUMBER;
      const texto = `Olá, meu nome é ${nome}.\n${mensagem}`;
      const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;
      const win = window.open(url, '_blank');
      if (!win) {
        alert('Não foi possível abrir o WhatsApp.');
      }
    });
  }
});

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  toggle.classList.toggle('active');
  document.body.classList.toggle('menu-open');
});

