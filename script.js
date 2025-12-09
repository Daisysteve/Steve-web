document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.getElementById('hero-section');
    const images = [
        'back1.jpg',
        'back2.jpg',
        'back3.jpg',
        'back4.jpg',
        'back5.jpg',
    ];
    let currentIndex = 0;

    function changeBackground() {
        heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    changeBackground();
    setInterval(changeBackground, 2300); 
});
