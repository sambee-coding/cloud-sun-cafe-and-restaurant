document.addEventListener('DOMContentLoaded', () => {
    // Sticky Header
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('sticky');
                header.style.backgroundColor = 'rgba(241, 240, 228, 0.95)';
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            } else {
                header.classList.remove('sticky');
                header.style.backgroundColor = '#F1F0E4';
                header.style.boxShadow = 'none';
            }
        });
    }

    // Scroll reveal/animation logic could go here
    console.log('Cloud Sun Cafe site initialized.');
});
