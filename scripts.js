// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll animation for sections
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + window.innerHeight;

    sections.forEach(section => {
        if (scrollPosition > section.offsetTop + 100) {
            section.classList.add('active');
        }
    });
});

// Add this for background patterns
document.body.onload = function() {
    const pattern = Trianglify({
        width: window.innerWidth,
        height: window.innerHeight,
        cell_size: 70,
        x_colors: ['#87CEFA', '#4682B4', '#007bff', '#0056b3'],
    });
    document.body.appendChild(pattern.canvas());
};
