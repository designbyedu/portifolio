// WhatsApp form
const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !mensagem) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Substitua pelo seu número do WhatsApp (com DDI + DDD, sem traços ou espaços)
    const telefone = '5542999269931';

    const mensagemFormatada = mensagem.replace(/\r?\n/g, '\n'); // garante quebras corretas
    const texto = `Olá, meu nome é ${nome}.\n${mensagemFormatada}`;
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank');
});

// Botão Hamburguer
const menuToggle = document.querySelector('.menu-toggle');
const navegation = document.querySelector('.navegation');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navegation.classList.toggle('active');
});