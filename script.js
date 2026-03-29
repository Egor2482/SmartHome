// script.js - общий JavaScript для всех страниц

document.addEventListener('DOMContentLoaded', () => {
    // --- Логика переключения темы ---
    const themeToggle = document.querySelector('.theme-toggle');
    
    // Проверяем, сохранил ли пользователь тему ранее
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        updateThemeIcon(true);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = document.body.classList.toggle('dark-theme');
            
            // Сохраняем выбор пользователя
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            updateThemeIcon(isDark);
        });
    }

    function updateThemeIcon(isDark) {
        const icon = themeToggle.querySelector('i');
        if (isDark) {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    }

    // --- Аккордеон для FAQ ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const questionDiv = item.querySelector('.faq-question');
        if (questionDiv) {
            questionDiv.addEventListener('click', () => {
                item.classList.toggle('open');
            });
        }
    });

    // --- Подсветка активной ссылки ---
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

function buyOnAvito(productName) {
    window.open('https://rickroll.link', '_blank');
}