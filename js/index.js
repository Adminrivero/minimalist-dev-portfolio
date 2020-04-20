const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');
const btnBackToTop = document.querySelector('.btn-to-top');

window.onscroll = function() {scrollFunction()};

toggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});

btnBackToTop.addEventListener('click', () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    
})

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btnBackToTop.classList.add('visible');
    } else {
        btnBackToTop.classList.remove('visible');
    }
  }