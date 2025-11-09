// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll indicator animation
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        const benefitsSection = document.querySelector('.benefits');
        if (benefitsSection) {
            const headerOffset = 100;
            const elementPosition = benefitsSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
}

// Play button functionality
const playButton = document.querySelector('.play-button');
if (playButton) {
    playButton.addEventListener('click', () => {
        // Here you can add video modal or redirect to video
        alert('Video player would open here');
    });
}

// Product card hover effects
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Review cards animation on scroll
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

// Observe review cards
const reviewCards = document.querySelectorAll('.review-card');
reviewCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Subscribe button functionality
const subscribeButton = document.querySelector('.subscribe .btn-primary');
if (subscribeButton) {
    subscribeButton.addEventListener('click', () => {
        const email = prompt('Enter your email to subscribe:');
        if (email) {
            alert(`Thank you for subscribing with ${email}!`);
        }
    });
}

// Buy now buttons functionality
const buyNowButtons = document.querySelectorAll('.btn-primary');
buyNowButtons.forEach(button => {
    if (button.textContent.trim() === 'Buy now') {
        button.addEventListener('click', () => {
            alert('Product added to cart!');
        });
    }
});

// Product price buttons
const productPrices = document.querySelectorAll('.product-price');
productPrices.forEach(button => {
    button.addEventListener('click', () => {
        const productCard = button.closest('.product-card');
        const productName = productCard.querySelector('.product-info h3').textContent;
        alert(`Added ${productName} to cart!`);
    });
});

// Leave a review button
const leaveReviewButton = document.querySelector('.btn-outline-dark');
if (leaveReviewButton && leaveReviewButton.textContent.includes('Leave a review')) {
    leaveReviewButton.addEventListener('click', () => {
        alert('Review form would open here');
    });
}

// Animate ingredients cards on scroll
const ingredientCards = document.querySelectorAll('.ingredient-card');
ingredientCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'scale(0.9)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1)';
            }
        });
    }, observerOptions);
    
    cardObserver.observe(card);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < hero.offsetHeight) {
        const heroBackground = hero.querySelector('.hero-background');
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    }
});

// Mobile menu toggle (for future mobile menu)
const createMobileMenu = () => {
    if (window.innerWidth <= 768) {
        const nav = document.querySelector('.nav');
        const navMenu = document.querySelector('.nav-menu');
        
        if (navMenu && !document.querySelector('.mobile-menu-toggle')) {
            const toggle = document.createElement('button');
            toggle.className = 'mobile-menu-toggle';
            toggle.innerHTML = '☰';
            toggle.style.cssText = 'display: none; background: none; border: none; font-size: 24px; cursor: pointer; color: var(--text-dark);';
            
            nav.insertBefore(toggle, navMenu);
            
            toggle.addEventListener('click', () => {
                navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            });
            
            if (window.innerWidth <= 768) {
                toggle.style.display = 'block';
                navMenu.style.display = 'none';
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '100%';
                navMenu.style.left = '0';
                navMenu.style.width = '100%';
                navMenu.style.backgroundColor = 'var(--bg-light)';
                navMenu.style.padding = '20px';
                navMenu.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            }
        }
    }
};

// Check on resize
window.addEventListener('resize', createMobileMenu);
createMobileMenu();

