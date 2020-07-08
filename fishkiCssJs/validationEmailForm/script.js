'use strict';
function validation() {
    let form = document.getElementById('form'),
        email = document.getElementById('email').value,
        text = document.getElementById('text');
    
    let pattern = /^[^0-9 ]+[a-z0-9]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.match(pattern)) {
        form.classList.add('valid');
        form.classList.remove('invalid');
        text.innerHTML = 'Your Email Address in Valid.';
        text.style.color = '#00ff00';
    } else {
        form.classList.remove('valid');
        form.classList.add('invalid');
        text.innerHTML = 'Please Enter Valid Email Address.';
        text.style.color = '#ff0000';
    }
}

email.addEventListener('input', validation);