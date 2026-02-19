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

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const isOpen = answer.classList.contains('open');

        document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
        document.querySelectorAll('.faq-question').forEach(b => b.classList.remove('active'));

        if (!isOpen) {
            answer.classList.add('open');
            button.classList.add('active');
        }
    });
});