const form = document.querySelector('.cto .col-1 form');
const emailInput = document.getElementById('email');
const iconError = document.querySelector('.cto .col-1 form .icon-error');
const message = document.querySelector('.cto .col-1 form .message');

const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

form.addEventListener('submit', e => {
    e.preventDefault();
    if (emailInput.value === '') {
        emailInput.value = '';
        emailInput.classList.add('error');
        iconError.classList.add('error');
        message.classList.contains('success') ? message.classList.replace('success', 'error') : message.classList.add('error');
        message.textContent = 'Please provide an email address';
        return;
    }

    if (!emailPattern.test(emailInput.value)) {
        emailInput.value = '';
        emailInput.classList.add('error');
        iconError.classList.add('error');
        message.classList.contains('success') ? message.classList.replace('success', 'error') : message.classList.add('error');
        message.textContent = 'Invalid email address';
        return;
    }

    emailInput.value = '';
    emailInput.classList.contains('error') ? emailInput.classList.remove('error') : null;
    iconError.classList.contains('error') ? iconError.classList.remove('error') : null;
    message.classList.contains('error') ? message.classList.replace('error', 'success') : message.classList.add('success');
    message.textContent = 'Thank You!';
});