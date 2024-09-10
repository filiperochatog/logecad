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
const submitBtn = document.getElementById('submitBtn');
const loadingSpinner = document.getElementById('loadingSpinner');

// Alternar entre login e cadastro
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

// Validação de formulário
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    showLoading(true);
    const email = document.getElementById('email').value;
    if (!validateEmail(email)) {
        errorMessage.textContent = 'Por favor, insira um e-mail válido.';
        errorMessage.classList.remove('hidden');
        showLoading(false);
    } else {
        errorMessage.classList.add('hidden');
        setTimeout(() => {
            showLoading(false);
            alert('Login realizado com sucesso!');
        }, 1500); // Simulação de delay
    }
});

registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    showLoading(true);
    const email = document.getElementById('registerEmail').value;
    if (!validateEmail(email)) {
        errorMessage.textContent = 'Por favor, insira um e-mail válido.';
        errorMessage.classList.remove('hidden');
        showLoading(false);
    } else if (registerPassword.value !== confirmPassword.value) {
        errorMessage.textContent = 'As senhas não coincidem.';
        errorMessage.classList.remove('hidden');
        showLoading(false);
    } else {
        errorMessage.classList.add('hidden');
        setTimeout(() => {
            showLoading(false);
            alert('Cadastro realizado com sucesso!');
        }, 1500); // Simulação de delay
    }
});

// Mostrar/Ocultar senha
togglePassword.addEventListener('click', function() {
    toggleVisibility(password, togglePassword, 'eyeIcon');
});

toggleRegisterPassword.addEventListener('click', function() {
    toggleVisibility(registerPassword, toggleRegisterPassword, 'registerEyeIcon');
});

toggleConfirmPassword.addEventListener('click', function() {
    toggleVisibility(confirmPassword, toggleConfirmPassword, 'confirmEyeIcon');
});

// Função para alternar visibilidade de senha
function toggleVisibility(input, button, iconId) {
    const type = input.type === 'password' ? 'text' : 'password';
    input.type = type;
    const icon = document.getElementById(iconId);
    icon.classList.toggle('fa-eye');
    icon.classList.toggle('fa-eye-slash');
}

// Função para simular loading
function showLoading(isLoading) {
    if (isLoading) {
        submitBtn.classList.add('hidden');
        loadingSpinner.classList.remove('hidden');
    } else {
        submitBtn.classList.remove('hidden');
        loadingSpinner.classList.add('hidden');
    }
}

// Função para validar e-mail
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
