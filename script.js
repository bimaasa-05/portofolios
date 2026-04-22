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

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

window.onload = () => {
    typeEffect();
    // Tambahkan timeline-item ke daftar animasi
    const fadeElements = document.querySelectorAll('.name, .description, .cta-btn, .project-card, .timeline-item');
    fadeElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s ease-out";
        observer.observe(el);
    });
};
