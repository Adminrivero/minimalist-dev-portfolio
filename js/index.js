const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');
const btnBackToTop = document.querySelector('#btnToTop');
const forms = document.querySelectorAll('.needs-validation');

document.body.onload = () => btnBackToTop.classList.remove('visible');
window.onscroll = function() { scrollFunction() };

toggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});

btnBackToTop.addEventListener('click', () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

});

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btnBackToTop.classList.add('visible');
    } else {
        btnBackToTop.classList.remove('visible');
    }
}

forms.forEach(form => {
    if (form.id === 'frmContact') {
        form.addEventListener('submit', event => {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                sendMessage(form);
            }
            form.classList.add('was-validated');
        });
    }
});

function sendMessage(form) {
    let name = form.elements.namedItem('contact-name').value;
    let email = form.elements.namedItem('contact-email').value;
    let subject = form.elements.namedItem('contact-subject').value;
    let message = form.elements.namedItem('contact-message').value;
    let source = window.location.href;
    let messageBody = `user name: ${name}%0D%0Auser email: ${email}%0D%0Acontact source: ${source}%0D%0A%0D%0A${message}`;
    window.location.href = `mailto:hrrm.1986lt@gmail.com?subject=${subject}&body=${messageBody}`;
}
