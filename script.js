let slideIndex = 0;
let autoSlideInterval;

// Bu fonksiyonu window objesine ekleyerek HTML'den erişilebilir yapıyoruz
window.currentSlide = function(index) {
    clearInterval(autoSlideInterval);
    showSlide(index);
    startAuto();
}

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if (slides.length === 0) return;

    if (index >= slides.length) slideIndex = 0;
    else if (index < 0) slideIndex = slides.length - 1;
    else slideIndex = index;

    slides.forEach(s => {
        s.classList.remove('active');
        s.style.opacity = "0";
        s.style.zIndex = "1";
    });
    
    dots.forEach(d => d.classList.remove('active'));

    if (slides[slideIndex]) {
        slides[slideIndex].classList.add('active');
        slides[slideIndex].style.opacity = "1";
        slides[slideIndex].style.zIndex = "2";
    }
    
    if (dots[slideIndex]) {
        dots[slideIndex].classList.add('active');
    }
}

function startAuto() {
    autoSlideInterval = setInterval(() => {
        showSlide(slideIndex + 1);
    }, 2000);
}

// Sayfa yüklendiğinde çalıştır
document.addEventListener("DOMContentLoaded", function() {
    showSlide(0);
    startAuto();
});