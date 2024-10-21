document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const dropdown = document.querySelector('.dropdown');
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const parts = document.querySelectorAll('.part');
    
    menuButton.addEventListener('click', function() {
        dropdown.classList.toggle('show');
    });

    document.addEventListener('click', function(event) {
        if (!menuButton.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.remove('show');
        }
    });

    let currentIndex = 0;
    
    function updateCarousel() {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = parts.length - 1; // Retourner au dernier cercle
        }
        updateCarousel();
    });

    nextBtn.addEventListener('click', function() {
        if (currentIndex < parts.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Revenir au premier cercle
        }
        updateCarousel();
    });
});