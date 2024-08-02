// Adiciona um evento de 'submit' ao formulário de login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página)

    // Limpa as mensagens de erro anteriores
    document.getElementById('username-error').textContent = '';
    document.getElementById('password-error').textContent = '';
    document.getElementById('message').textContent = '';

    // Obtém os valores dos campos de entrada
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    let valid = true;

    // Validação simples de entrada
    if (username === '') {
        document.getElementById('username-error').textContent = 'Usuário é obrigatório';
        valid = false;
    }

    if (password === '') {
        document.getElementById('password-error').textContent = 'Senha é obrigatória';
        valid = false;
    }

    if (!valid) {
        return; // Se houver erros, sai da função
    }

    // Verifica se o nome de usuário e senha estão corretos
    if (username === 'usuario' && password === 'senha') {
        document.getElementById('message').style.color = 'green'; // Define a cor da mensagem como verde
        document.getElementById('message').textContent = 'Login bem-sucedido!'; // Exibe a mensagem de sucesso
    } else {
        document.getElementById('message').style.color = 'red'; // Define a cor da mensagem como vermelha
        document.getElementById('message').textContent = 'Usuário ou senha incorretos.'; // Exibe a mensagem de erro
    }
});

// Seleciona a imagem do logo
const logo = document.getElementById('logo');

// Array com os caminhos das imagens do tênis
const images = ['img/tenis1.png', 'img/tenis2.png', 'img/tenis3.png', 'img/tenis4.png', 'img/tenis5.png', 'img/tenis6.png'];

// Índice da imagem atual
let currentImageIndex = 0;

// Adiciona um evento de clique ao logo
logo.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % images.length; // Incrementa o índice e faz o loop
    logo.src = images[currentImageIndex]; // Troca a imagem

    // Tratamento de erro para verificar se a imagem foi carregada corretamente
    logo.onerror = function() {
        console.error('Erro ao carregar a imagem: ' + images[currentImageIndex]);
        // Define a imagem padrão ou uma mensagem de erro
        logo.src = 'img/tenis1.png'; // Ou defina para uma imagem padrão
    };
});

// Adiciona um evento de clique para o botão de login do Google
document.getElementById('google-login').addEventListener('click', function() {
    alert('Função de login com Google ainda não implementada.'); // Exemplo de ação ao clicar no botão
});
