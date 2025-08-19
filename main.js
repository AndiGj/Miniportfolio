// Theme Management
let isDarkMode = true;

function toggleTheme() {
    isDarkMode = !isDarkMode;
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle i');
    
    if (isDarkMode) {
        body.setAttribute('data-theme', 'dark');
        themeToggle.className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');
    } else {
        body.removeAttribute('data-theme');
        themeToggle.className = 'fas fa-moon';
        localStorage.setItem('theme', 'light');
    }
}

// Initialize theme from localStorage
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const themeToggle = document.querySelector('.theme-toggle i');
    
    // Always start in dark mode unless user has explicitly chosen light mode
    if (savedTheme !== 'light') {
        isDarkMode = true;
        document.body.setAttribute('data-theme', 'dark');
        themeToggle.className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');
    } else {
        isDarkMode = false;
        document.body.removeAttribute('data-theme');
        themeToggle.className = 'fas fa-moon';
    }
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}



// Intersection Observer for animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation - more subtle
    const animateElements = document.querySelectorAll('.skill-card, .project-card, .stat');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(15px)';
        el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        observer.observe(el);
    });
}

// Navbar scroll effect and cursor text visibility
function initializeNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    const heroSection = document.querySelector('.hero');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const heroHeight = heroSection ? heroSection.offsetHeight : 0;
        
        // Navbar background effect
        if (scrollTop > 100) {
            navbar.style.background = isDarkMode 
                ? 'rgba(15, 23, 42, 0.98)' 
                : 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.background = isDarkMode 
                ? 'rgba(15, 23, 42, 0.95)' 
                : 'rgba(255, 255, 255, 0.95)';
        }

        lastScrollTop = scrollTop;
    });
}



// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    initializeSmoothScrolling();
    initializeAnimations();
    initializeNavbarScroll();
});


