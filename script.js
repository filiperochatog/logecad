
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const toggleText = document.getElementById('toggleText');
const toggleFormButton = document.getElementById('toggleForm');
const formTitle = document.getElementById('formTitle');
const errorMessage = document.getElementById('errorMessage');
const password = document.getElementById('password');
const registerPassword = document.getElementById('registerPassword');
const confirmPassword = document.getElementById('confirmPassword');
const togglePassword = document.getElementById('togglePassword');
const toggleRegisterPassword = document.getElementById('toggleRegisterPassword');
const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');

// Alternar
toggleFormButton.addEventListener('click', function() {
    errorMessage.classList.add('hidden'); // Limpa mensagens de erro
    if (loginForm.classList.contains('hidden')) {
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
        formTitle.textContent = 'Login';
        toggleText.textContent = 'Não tem uma conta?';
        toggleFormButton.textContent = 'Cadastre-se';
    } else {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
        formTitle.textContent = 'Cadastro';
        toggleText.textContent = 'Já tem uma conta?';
        toggleFormButton.textContent = 'Entrar';
    }
});

// Valid for
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    if (!validateEmail(email)) {
        errorMessage.textContent = 'Por favor, insira um e-mail válido.';
        errorMessage.classList.remove('hidden');
    } else {
        errorMessage.classList.add('hidden');
        alert('Login realizado com sucesso!');
    }
});

registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('registerEmail').value;
    if (!validateEmail(email)) {
        errorMessage.textContent = 'Por favor, insira um e-mail válido.';
        errorMessage.classList.remove('hidden');
    } else if (registerPassword.value !== confirmPassword.value) {
        errorMessage.textContent = 'As senhas não coincidem.';
        errorMessage.classList.remove('hidden');
    } else {
        errorMessage.classList.add('hidden');
        alert('Cadastro realizado com sucesso!');
    }
});

// validar e-mail
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Mostrar/Ocultar senha
togglePassword.addEventListener('click', function() {
    toggleVisibility(password, togglePassword);
});

toggleRegisterPassword.addEventListener('click', function() {
    toggleVisibility(registerPassword, toggleRegisterPassword);
});

toggleConfirmPassword.addEventListener('click', function() {
    toggleVisibility(confirmPassword, toggleConfirmPassword);
});

//  alternar visibilidade de senha
function toggleVisibility(input, button) {
    const type = input.type === 'password' ? 'text' : 'password';
    input.type = type;
    button.textContent = input.type === 'password' ? '👁️' : '🙈';
}
