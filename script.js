 const form = document.getElementById('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        if (!nome || !mensagem) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Replace with your WhatsApp number (including country and area code, without dashes or spaces)
        const telefone = '5542999269931';

        const texto = `Olá, meu nome é ${nome}.\n${mensagem}`;
        const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

        const win = window.open(url, '_blank');
        if (!win) {
            alert('Não foi possível abrir o WhatsApp. Por favor, verifique se o bloqueador de pop-ups está ativado.');
        }
    });