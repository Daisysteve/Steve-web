document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.getElementById('hero-section');
    const images = [
        'background/back1.jpg',
        'background/back2.jpg',
        'background/back3.jpg',
        'background/back4.jpg',
        'background/back5.jpg',
    ];
    let currentIndex = 0;

    function changeBackground() {
        heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    changeBackground();
    setInterval(changeBackground, 2300); 
});