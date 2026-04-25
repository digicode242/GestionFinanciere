// =====================================================
// INITIALISATION DES BIBLIOTHÈQUES
// =====================================================

// Lucide : remplace tous les <i data-lucide="..."> par des SVG
if (window.lucide) {
    lucide.createIcons();
}

// AOS : animations au scroll
if (window.AOS) {
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 80
    });
}

// Swiper : carrousel des aperçus
if (window.Swiper) {
    new Swiper('.showcase-swiper', {
        slidesPerView: 1,
        spaceBetween: 24,
        centeredSlides: true,
        loop: true,
        autoplay: { delay: 4500, disableOnInteraction: false },
        pagination: { el: '.showcase-swiper .swiper-pagination', clickable: true },
        navigation: {
            nextEl: '.showcase-swiper .swiper-button-next',
            prevEl: '.showcase-swiper .swiper-button-prev'
        },
        breakpoints: {
            640: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.2 }
        }
    });

    // Swiper : carrousel des témoignages
    new Swiper('.testimonials-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: { delay: 6000, disableOnInteraction: false },
        pagination: { el: '.testimonials-swiper .swiper-pagination', clickable: true },
        effect: 'fade',
        fadeEffect: { crossFade: true }
    });
}

// =====================================================
// 1. NAVBAR : changement de style au scroll
// =====================================================
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    if (window.scrollY > 400) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

// Bouton retour en haut
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// =====================================================
// 2. MENU BURGER mobile
// =====================================================
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

const toggleMenu = () => {
    burger.classList.toggle('open');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
};

burger.addEventListener('click', toggleMenu);
burger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleMenu(); }
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
            burger.classList.remove('open');
            navLinks.classList.remove('open');
            document.body.style.overflow = '';
        }
    });
});

// =====================================================
// 3. SCROLL DOUX avec offset pour la navbar fixe
// =====================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId.length > 1) {
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const offset = 70;
                const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        }
    });
});

// =====================================================
// 4. COMPTEURS ANIMÉS (Hero)
// =====================================================
const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 2000;
    const startTime = performance.now();

    const update = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        const value = Math.floor(eased * target);
        el.textContent = value + suffix;
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = target + suffix;
    };
    requestAnimationFrame(update);
};

window.addEventListener('load', () => {
    document.querySelectorAll('.stat-number').forEach(animateCounter);
});

// =====================================================
// 5. VALIDATION FORMULAIRE + MESSAGE DE SUCCÈS
// =====================================================
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('successMsg');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const showError = (inputId, errorId, show) => {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    if (show) {
        input.classList.add('error');
        error.classList.add('show');
    } else {
        input.classList.remove('error');
        error.classList.remove('show');
    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const prenom = document.getElementById('prenom').value.trim();
    const email = document.getElementById('email').value.trim();
    const niveau = document.getElementById('niveau').value;

    let valid = true;

    if (prenom === '') { showError('prenom', 'errPrenom', true); valid = false; }
    else showError('prenom', 'errPrenom', false);

    if (email === '' || !emailRegex.test(email)) { showError('email', 'errEmail', true); valid = false; }
    else showError('email', 'errEmail', false);

    if (niveau === '') { showError('niveau', 'errNiveau', true); valid = false; }
    else showError('niveau', 'errNiveau', false);

    if (valid) {
        form.style.transition = 'opacity 0.4s ease';
        form.style.opacity = '0';
        setTimeout(() => {
            form.style.display = 'none';
            successMsg.classList.add('show');
            // Re-créer les icônes lucide dans le message de succès
            if (window.lucide) lucide.createIcons();
        }, 400);
    }
});

// Validation en temps réel
document.getElementById('prenom').addEventListener('input', (e) => {
    if (e.target.value.trim() !== '') showError('prenom', 'errPrenom', false);
});
document.getElementById('email').addEventListener('input', (e) => {
    if (emailRegex.test(e.target.value.trim())) showError('email', 'errEmail', false);
});
document.getElementById('niveau').addEventListener('change', (e) => {
    if (e.target.value !== '') showError('niveau', 'errNiveau', false);
});
