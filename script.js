document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.hero-slide');
    let currentIndex = 0;

    function changeBackground() {
        // เอา class 'active' ออกจากรูปเดิม (จะค่อยๆ จางหายไป)
        slides[currentIndex].classList.remove('active');

        // ขยับไปรูปถัดไป
        currentIndex = (currentIndex + 1) % slides.length;

        // ใส่ class 'active' ให้รูปใหม่ (จะค่อยๆ ชัดขึ้นมา)
        slides[currentIndex].classList.add('active');
    }

    // เปลี่ยนทุก 3 วินาที
    setInterval(changeBackground, 3000); 
});
