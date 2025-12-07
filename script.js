// ==========================================
// PORTFOLIO INTERACTIVE FEATURES
// ==========================================

// 1. SMOOTH SCROLLING & ACTIVE NAV HIGHLIGHTING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active nav link highlighting on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(current => {
        const sectionTop = current.offsetTop - 200;
        const sectionHeight = current.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            
            const activeLink = document.querySelector(
                `.nav-link[href="#${current.getAttribute('id')}"]`
            );
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
});

// Add active class styling
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    .nav-link.active {
        color: var(--primary-color);
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(styleSheet);

// 2. GET IN TOUCH BUTTON
document.querySelector('.btn-primary').addEventListener('click', () => {
    const contactSection = document.querySelector('#contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
});

// 3. SCROLL ANIMATIONS
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

// Observe all interactive elements
document.querySelectorAll('.project-card, .skill-category, .edu-item, .experience-item').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(element);
});

// 4. PARALLAX EFFECT ON SCROLL
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPosition = `0 ${scrollY * 0.5}px`;
    }
});

// 5. RIPPLE EFFECT ON BUTTONS
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple styling
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// 6. MOUSE MOVE EFFECT ON CARDS
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const rotateX = (y - rect.height / 2) / 10;
        const rotateY = (x - rect.width / 2) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(-12px)';
    });
});

// 7. SCROLL TO TOP BUTTON
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollTopBtn);

const scrollTopStyle = document.createElement('style');
scrollTopStyle.textContent = `
    .scroll-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        pointer-events: none;
        box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
        z-index: 99;
    }
    .scroll-to-top.show {
        opacity: 1;
        pointer-events: auto;
    }
    .scroll-to-top:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(99, 102, 241, 0.5);
    }
`;
document.head.appendChild(scrollTopStyle);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 8. CONSOLE MESSAGE
console.log('%c🚀 Welcome to Rahul H Portfolio!', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cMade with ❤️ | Full Stack Developer', 'color: #ec4899; font-size: 14px;');
