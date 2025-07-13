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

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        if (!nome || !mensagem) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Substitua pelo seu número do WhatsApp (com DDI + DDD, sem traços ou espaços)
        const telefone = '5542999999999';

        const texto = `Olá, meu nome é ${nome}.%0A${mensagem}`;
        const url = `https://wa.me/${telefone}?text=${texto}`;

        window.open(url, '_blank');
    });

    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        toggle.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });
});