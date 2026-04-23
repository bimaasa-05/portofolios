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

// Observer dengan logika reset agar animasi bisa berulang
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-animation');
        } else {
            // Hapus class ini agar saat di-scroll kembali, animasi muncul lagi
            entry.target.classList.remove('show-animation');
        }
    });
}, { threshold: 0.1 }); // Trigger saat 10% elemen terlihat

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

    // Target elemen yang ingin diberi animasi scroll
    const fadeElements = document.querySelectorAll('.name, .description, .cta-btn, .project-card, .timeline-item, .section-title');
    fadeElements.forEach(el => {
        el.classList.add('hidden-animation'); // Beri state awal tersembunyi
        observer.observe(el);
    });
};