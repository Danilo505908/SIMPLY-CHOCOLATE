// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('.nav');
const body = document.body;

// Create mobile menu
const createMobileMenu = () => {
    if (!document.querySelector('.mobile-menu')) {
        // Create overlay
        const overlay = document.createElement('div');
        overlay.className = 'mobile-menu-overlay';
        body.appendChild(overlay);

        const mobileMenu = document.createElement('div');
        mobileMenu.className = 'mobile-menu';

        // Create close button
        const closeButton = document.createElement('button');
        closeButton.className = 'mobile-menu-close';
        closeButton.setAttribute('aria-label', 'Close menu');
        closeButton.innerHTML = `
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.33337 9.33337L22.6667 22.6667M22.6667 9.33337L9.33337 22.6667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;

        // Create menu container
        const menuContainer = document.createElement('div');
        menuContainer.className = 'mobile-menu-content';

        // Create navigation menu from scratch
        const navMenu = document.createElement('ul');
        navMenu.className = 'nav-menu';

        // Get menu items from original menu
        const originalNavMenu = document.querySelector('.nav-menu');
        if (originalNavMenu) {
            const menuItems = originalNavMenu.querySelectorAll('li');
            menuItems.forEach((item, index) => {
                const link = item.querySelector('a');
                if (link) {
                    const newLi = document.createElement('li');
                    const newLink = document.createElement('a');
                    newLink.href = link.getAttribute('href');
                    newLink.textContent = link.textContent;
                    newLi.appendChild(newLink);
                    navMenu.appendChild(newLi);
                }
            });
        } else {
            // Fallback: create menu items manually
            const menuItems = [
                { text: 'Home', href: '#home' },
                { text: "How it's made?", href: '#how-its-made' },
                { text: 'Our products', href: '#products' },
                { text: 'Top sellers', href: '#top-sellers' },
                { text: 'Chocolate is loved', href: '#reviews' }
            ];

            menuItems.forEach(item => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = item.href;
                a.textContent = item.text;
                li.appendChild(a);
                navMenu.appendChild(li);
            });
        }

        // Create social networks container
        const socialContainer = document.createElement('div');
        socialContainer.className = 'mobile-menu-social';

        const originalSocial = document.querySelector('.social-networks');
        if (originalSocial) {
            const socialLinks = originalSocial.querySelectorAll('a');
            const socialNetworks = document.createElement('div');
            socialNetworks.className = 'social-networks';

            socialLinks.forEach(link => {
                const newLink = link.cloneNode(true);
                socialNetworks.appendChild(newLink);
            });

            socialContainer.appendChild(socialNetworks);
        } else {
            // Fallback: create social networks manually
            const socialNetworks = document.createElement('div');
            socialNetworks.className = 'social-networks';

            // Instagram
            const instagramLink = document.createElement('a');
            instagramLink.href = '#';
            instagramLink.setAttribute('aria-label', 'Instagram');
            instagramLink.innerHTML = `
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="#111111"/>
                </svg>
            `;
            socialNetworks.appendChild(instagramLink);

            // Twitter
            const twitterLink = document.createElement('a');
            twitterLink.href = '#';
            twitterLink.setAttribute('aria-label', 'Twitter');
            twitterLink.innerHTML = `
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `;
            socialNetworks.appendChild(twitterLink);

            socialContainer.appendChild(socialNetworks);
        }

        menuContainer.appendChild(navMenu);
        menuContainer.appendChild(socialContainer);

        mobileMenu.appendChild(closeButton);
        mobileMenu.appendChild(menuContainer);

        body.appendChild(mobileMenu);

        // Close handlers
        const closeMenu = () => {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            body.style.overflow = '';
        };

        // Close button handler
        closeButton.addEventListener('click', closeMenu);

        // Overlay click handler
        overlay.addEventListener('click', closeMenu);

        // Add click handlers to mobile menu links
        mobileMenu.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
};

// Toggle mobile menu
if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        createMobileMenu();
        const mobileMenu = document.querySelector('.mobile-menu');

        if (mobileMenu) {
            const overlay = document.querySelector('.mobile-menu-overlay');
            const isActive = mobileMenu.classList.contains('active');

            if (isActive) {
                mobileMenu.classList.remove('active');
                if (overlay) overlay.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                body.style.overflow = '';
            } else {
                mobileMenu.classList.add('active');
                if (overlay) overlay.classList.add('active');
                mobileMenuToggle.classList.add('active');
                body.style.overflow = 'hidden';
            }
        }
    });
}

// Close mobile menu on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        const mobileMenu = document.querySelector('.mobile-menu');
        const overlay = document.querySelector('.mobile-menu-overlay');
        if (mobileMenu) {
            mobileMenu.classList.remove('active');
        }
        if (overlay) {
            overlay.classList.remove('active');
        }
        if (mobileMenuToggle) {
            mobileMenuToggle.classList.remove('active');
        }
        body.style.overflow = '';
    }
});

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
        // Create video modal
        const modal = document.createElement('div');
        modal.className = 'video-modal';
        modal.innerHTML = `
            <div class="video-modal-content">
                <button class="video-modal-close">&times;</button>
                <div class="video-container">
                    <p style="padding: 40px; text-align: center; color: #111;">Video player would be embedded here</p>
                </div>
            </div>
        `;
        body.appendChild(modal);
        body.style.overflow = 'hidden';

        // Close modal
        const closeBtn = modal.querySelector('.video-modal-close');
        closeBtn.addEventListener('click', () => {
            modal.remove();
            body.style.overflow = '';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
                body.style.overflow = '';
            }
        });
    });
}

// Product card hover effects
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-5px)';
        this.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseleave', function () {
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
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Subscribe button functionality
const subscribeButton = document.querySelector('.subscribe .btn-primary');
if (subscribeButton) {
    subscribeButton.addEventListener('click', () => {
        const email = prompt('Enter your email to subscribe:');
        if (email && email.includes('@')) {
            alert(`Thank you for subscribing with ${email}!`);
        } else if (email) {
            alert('Please enter a valid email address.');
        }
    });
}

// Buy now buttons functionality
const buyNowButtons = document.querySelectorAll('.btn-primary');
buyNowButtons.forEach(button => {
    if (button.textContent.trim() === 'Buy now') {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            // Create notification
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.textContent = 'Product added to cart!';
            body.appendChild(notification);

            setTimeout(() => {
                notification.classList.add('show');
            }, 10);

            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => notification.remove(), 300);
            }, 2000);
        });
    }
});

// Product price buttons
const productPrices = document.querySelectorAll('.product-price');
productPrices.forEach(button => {
    button.addEventListener('click', () => {
        const productCard = button.closest('.product-card');
        const productName = productCard.querySelector('.product-info h3')?.textContent || 'Product';
        const productPrice = button.textContent.trim();

        // Create notification
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = `Added ${productName} (${productPrice}) to cart!`;
        body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('show');
        }, 10);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    });
});

// Leave a review button
const leaveReviewButton = document.querySelector('.btn-outline-dark');
if (leaveReviewButton && leaveReviewButton.textContent.includes('Leave a review')) {
    leaveReviewButton.addEventListener('click', () => {
        // Create review modal
        const modal = document.createElement('div');
        modal.className = 'review-modal';
        modal.innerHTML = `
            <div class="review-modal-content">
                <button class="review-modal-close">&times;</button>
                <h2>Leave a Review</h2>
                <form class="review-form">
                    <div class="form-group">
                        <label for="review-name">Your Name</label>
                        <input type="text" id="review-name" required>
                    </div>
                    <div class="form-group">
                        <label for="review-rating">Rating</label>
                        <select id="review-rating" required>
                            <option value="">Select rating</option>
                            <option value="5">5 Stars</option>
                            <option value="4">4 Stars</option>
                            <option value="3">3 Stars</option>
                            <option value="2">2 Stars</option>
                            <option value="1">1 Star</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="review-text">Your Review</label>
                        <textarea id="review-text" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit Review</button>
                </form>
            </div>
        `;
        body.appendChild(modal);
        body.style.overflow = 'hidden';

        // Close modal
        const closeBtn = modal.querySelector('.review-modal-close');
        closeBtn.addEventListener('click', () => {
            modal.remove();
            body.style.overflow = '';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
                body.style.overflow = '';
            }
        });

        // Form submission
        const form = modal.querySelector('.review-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your review!');
            modal.remove();
            body.style.overflow = '';
        });
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

// Products Slider functionality
const initProductsSlider = () => {
    const productsSection = document.querySelector('.products');
    const productsGrid = document.querySelector('.products-grid');
    const productCards = document.querySelectorAll('.product-card');
    const paginationContainer = document.querySelector('.products-pagination');

    if (!productsGrid || productCards.length === 0) {
        return;
    }

    let currentPage = 0;
    let touchStartX = 0;
    let touchEndX = 0;

    // Get visible cards count based on screen width
    const getVisibleCardsCount = () => {
        if (window.innerWidth >= 1200) {
            return 4;
        } else if (window.innerWidth >= 768) {
            return 2;
        } else {
            return 1;
        }
    };

    // Calculate total pages
    const getTotalPages = () => {
        const visibleCount = getVisibleCardsCount();
        return Math.ceil(productCards.length / visibleCount);
    };

    // Update pagination dots
    const updatePagination = () => {
        if (!paginationContainer) return;

        const totalPages = getTotalPages();
        paginationContainer.innerHTML = '';

        for (let i = 0; i < totalPages; i++) {
            const dot = document.createElement('span');
            dot.className = `pagination-dot${i === currentPage ? ' active' : ''}`;
            dot.addEventListener('click', () => goToPage(i));
            paginationContainer.appendChild(dot);
        }
    };

    // Go to specific page
    const goToPage = (pageIndex) => {
        const totalPages = getTotalPages();
        currentPage = Math.max(0, Math.min(pageIndex, totalPages - 1));

        const visibleCount = getVisibleCardsCount();
        const cardWidth = productCards[0].offsetWidth;
        const gap = parseFloat(window.getComputedStyle(productsGrid).gap) || 18;
        const scrollPosition = currentPage * (cardWidth + gap) * visibleCount;

        productsGrid.style.scrollBehavior = 'smooth';
        productsGrid.scrollLeft = scrollPosition;

        updatePagination();
        updateCardsVisibility();
    };

    // Update cards visibility with animation
    const updateCardsVisibility = () => {
        const visibleCount = getVisibleCardsCount();
        const startIndex = currentPage * visibleCount;
        const endIndex = startIndex + visibleCount;

        productCards.forEach((card, index) => {
            if (index >= startIndex && index < endIndex) {
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            } else {
                card.style.opacity = '0.5';
                card.style.transform = 'scale(0.95)';
            }
        });
    };

    // Touch handlers for swipe
    const handleTouchStart = (e) => {
        touchStartX = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next page
                goToPage(currentPage + 1);
            } else {
                // Swipe right - previous page
                goToPage(currentPage - 1);
            }
        }

        touchStartX = 0;
        touchEndX = 0;
    };

    // Add touch listeners
    productsGrid.addEventListener('touchstart', handleTouchStart, { passive: true });
    productsGrid.addEventListener('touchmove', handleTouchMove, { passive: true });
    productsGrid.addEventListener('touchend', handleTouchEnd);

    // Keyboard navigation
    productsSection?.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            goToPage(currentPage - 1);
        } else if (e.key === 'ArrowRight') {
            goToPage(currentPage + 1);
        }
    });

    // Handle resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const totalPages = getTotalPages();
            if (currentPage >= totalPages) {
                currentPage = totalPages - 1;
            }
            updatePagination();
            goToPage(currentPage);
        }, 100);
    });

    // Initialize
    updatePagination();
    updateCardsVisibility();

    // Add transition styles to cards
    productCards.forEach(card => {
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });
};

// Reviews Slider functionality  
const initReviewsSlider = () => {
    const reviewsSection = document.querySelector('.reviews');
    const reviewsContainer = document.querySelector('.reviews-cards');
    const reviewCards = document.querySelectorAll('.review-card');
    const paginationContainer = document.querySelector('.reviews-pagination');

    if (!reviewsContainer || reviewCards.length === 0) {
        return;
    }

    let currentPage = 0;
    let touchStartX = 0;
    let touchEndX = 0;

    // Get visible cards count based on screen width
    const getVisibleCardsCount = () => {
        if (window.innerWidth >= 1200) {
            return 3;
        } else if (window.innerWidth >= 768) {
            return 2;
        } else {
            return 1;
        }
    };

    // Calculate total pages
    const getTotalPages = () => {
        const visibleCount = getVisibleCardsCount();
        return Math.ceil(reviewCards.length / visibleCount);
    };

    // Update pagination dots
    const updatePagination = () => {
        if (!paginationContainer) return;

        const totalPages = getTotalPages();
        paginationContainer.innerHTML = '';

        for (let i = 0; i < totalPages; i++) {
            const dot = document.createElement('span');
            dot.className = `pagination-dot${i === currentPage ? ' active' : ''}`;
            dot.addEventListener('click', () => goToPage(i));
            paginationContainer.appendChild(dot);
        }
    };

    // Go to specific page
    const goToPage = (pageIndex) => {
        const totalPages = getTotalPages();
        currentPage = Math.max(0, Math.min(pageIndex, totalPages - 1));

        updateCardsVisibility();
        updatePagination();
    };

    // Update cards visibility with animation
    const updateCardsVisibility = () => {
        const visibleCount = getVisibleCardsCount();
        const startIndex = currentPage * visibleCount;
        const endIndex = startIndex + visibleCount;

        reviewCards.forEach((card, index) => {
            card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';

            if (index >= startIndex && index < endIndex) {
                card.style.display = 'flex';
                card.style.opacity = '1';
                card.style.transform = 'translateX(0) scale(1)';
                card.style.pointerEvents = 'auto';
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateX(50px) scale(0.9)';
                card.style.pointerEvents = 'none';
                // Hide after animation
                setTimeout(() => {
                    if (card.style.opacity === '0') {
                        card.style.display = 'none';
                    }
                }, 400);
            }
        });
    };

    // Touch handlers for swipe
    const handleTouchStart = (e) => {
        touchStartX = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next page
                goToPage(currentPage + 1);
            } else {
                // Swipe right - previous page
                goToPage(currentPage - 1);
            }
        }

        touchStartX = 0;
        touchEndX = 0;
    };

    // Add touch listeners
    reviewsContainer.addEventListener('touchstart', handleTouchStart, { passive: true });
    reviewsContainer.addEventListener('touchmove', handleTouchMove, { passive: true });
    reviewsContainer.addEventListener('touchend', handleTouchEnd);

    // Keyboard navigation
    reviewsSection?.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            goToPage(currentPage - 1);
        } else if (e.key === 'ArrowRight') {
            goToPage(currentPage + 1);
        }
    });

    // Handle resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const totalPages = getTotalPages();
            if (currentPage >= totalPages) {
                currentPage = totalPages - 1;
            }
            goToPage(currentPage);
        }, 100);
    });

    // Initialize
    updatePagination();
    updateCardsVisibility();
};

// Initialize sliders when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initProductsSlider();
        initReviewsSlider();
    });
} else {
    initProductsSlider();
    initReviewsSlider();
}

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Check if mobile menu should be visible
    if (window.innerWidth <= 768) {
        if (mobileMenuToggle) {
            mobileMenuToggle.style.display = 'flex';
        }
        if (nav) {
            nav.style.display = 'none';
        }
    }
});
