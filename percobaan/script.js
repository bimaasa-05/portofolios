const textElement = document.getElementById("text");
const phrase = "Web Developer";
let index = 0;

function typeEffect() {
    if (index < phrase.length) {
        textElement.textContent += phrase.charAt(index);
        index++;
        setTimeout(typeEffect, 150);
    }
}

// Observer untuk animasi scroll otomatis
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-animation');
        } else {
            // Animasi akan terulang setiap kali di-scroll ulang
            entry.target.classList.remove('show-animation');
        }
    });
}, { threshold: 0.1 });

window.onload = () => {
    typeEffect();

    // Logika Smooth Scroll
    const menuLinks = document.querySelectorAll('nav ul li a[href^="#"]');
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        });
    });

    // Otomatis mencari semua elemen yang butuh animasi scroll
    const fadeElements = document.querySelectorAll('.hidden-animation');
    fadeElements.forEach(el => {
        observer.observe(el);
    });
};