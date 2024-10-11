const form = document.querySelector('#formulario-contacto');
const inputs = form.querySelectorAll('input, textarea');

input.forEach((input) => {
    input.addEventListener('blur', () => {
        validateInput(input);
    })
});

function validateInput(input) {
    let isValid = true;
    let errorMessage = '';

    switch (input.id) {
        case 'asunto':
            if (input.value.trim() === '') {
                isValid = false;
                errorMessage = 'El asunto no puede estar vacío';
            }
        break;

        case 'cc':
            if (!isValidEmail(input.value)) {
                isValid = false;
                errorMessage = 'El CC debe ser un correo electrónico válido';
            }
            break;
        case 'mensaje':
            if (input.value.trim() === '') {
                isValid = false;
                errorMessage = 'El mensaje no puede estar vacío';
            }
        break;
    }

    if(isValid) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
        const errorSpan = document.querySelector(`#${input.id}-error`);
        errorSpan.textContent = errorMessage;
    }
}

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}


