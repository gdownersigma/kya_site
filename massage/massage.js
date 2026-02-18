const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');
const arrow = document.querySelector('.arrow');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Mobile dropdown toggle
if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            e.stopPropagation();
            
            // Force immediate toggle
            const isActive = dropdownMenu.classList.contains('active');
            dropdownMenu.classList.toggle('active', !isActive);
            
            if (arrow) {
                arrow.classList.toggle('rotated', !isActive);
            }
        }
    });
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        if (!link.classList.contains('dropdown-toggle')) {
            navLinks.classList.remove('active');
            if (dropdownMenu) {
                dropdownMenu.classList.remove('active');
            }
        }
    });
});
