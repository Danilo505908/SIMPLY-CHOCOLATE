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

// Products pagination dots functionality
const initProductsPagination = () => {
    const productsPagination = document.querySelector('.products-pagination');
    const productsGrid = document.querySelector('.products-grid');
    const productCards = document.querySelectorAll('.product-card');
    const paginationDots = document.querySelectorAll('.products-pagination .pagination-dot');

    if (!productsPagination || !productsGrid || paginationDots.length === 0 || productCards.length === 0) {
        return;
    }

    // Prevent manual scrolling/swiping
    let isProgrammaticScroll = false;

    // Check if grid is scrollable (tablet/mobile)
    const isScrollable = () => {
        return productsGrid.scrollWidth > productsGrid.clientWidth;
    };

    // Calculate how many cards are visible at once
    const getVisibleCardsCount = () => {
        if (window.innerWidth >= 1200) {
            return 4; // Desktop: 4 cards visible
        } else if (window.innerWidth >= 768) {
            return 2; // Tablet: 2 cards visible (with scroll)
        } else {
            return 1; // Mobile: 1 card visible
        }
    };

    // Get current active page based on scroll position
    const getCurrentPage = () => {
        if (!isScrollable()) {
            // On desktop where cards wrap, calculate based on visible cards
            const visibleCount = getVisibleCardsCount();
            const firstVisibleIndex = Array.from(productCards).findIndex(card => {
                const rect = card.getBoundingClientRect();
                const gridRect = productsGrid.getBoundingClientRect();
                return rect.left >= gridRect.left && rect.left < gridRect.right;
            });
            return Math.floor(Math.max(0, firstVisibleIndex) / visibleCount);
        }
        
        const scrollLeft = productsGrid.scrollLeft;
        const cardWidth = productCards[0]?.offsetWidth || 270;
        // Get gap from computed styles or use default
        const gridStyles = window.getComputedStyle(productsGrid);
        const gapValue = gridStyles.gap || '18px';
        const gap = parseFloat(gapValue) || 18;
        const cardWithGap = cardWidth + gap;
        const visibleCount = getVisibleCardsCount();
        const page = Math.round(scrollLeft / (cardWithGap * visibleCount));
        return Math.min(Math.max(0, page), paginationDots.length - 1);
    };
    
    // Scroll to specific page
    const scrollToPage = (pageIndex) => {
        if (!productsGrid || !productCards.length) {
            console.warn('Products grid or cards not found');
            return;
        }
        
        // Clamp page index
        const maxPage = Math.max(0, paginationDots.length - 1);
        const clampedIndex = Math.max(0, Math.min(pageIndex, maxPage));
        
        // Calculate scroll position for all devices
        const cardWidth = productCards[0].offsetWidth || 270;
        // Get gap from computed styles or use default
        const gridStyles = window.getComputedStyle(productsGrid);
        const gapValue = gridStyles.gap || '18px';
        const gap = parseFloat(gapValue) || 18;
        const cardWithGap = cardWidth + gap;
        const visibleCount = getVisibleCardsCount();
        const scrollPosition = clampedIndex * cardWithGap * visibleCount;
        
        // Mark as programmatic scroll
        isProgrammaticScroll = true;
        
        // Enable scrolling temporarily for smooth scroll
        productsGrid.style.overflowX = 'auto';
        
        productsGrid.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
        
        // Disable scrolling after animation (prevent manual swipe)
        setTimeout(() => {
            productsGrid.style.overflowX = 'hidden';
            isProgrammaticScroll = false;
        }, 500);
    };

    // Update active dot
    const updateActiveDot = (activeIndex) => {
        const clampedIndex = Math.max(0, Math.min(activeIndex, paginationDots.length - 1));
        paginationDots.forEach((dot, index) => {
            if (index === clampedIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    };

    // Add click handlers to pagination dots
    paginationDots.forEach((dot, index) => {
        dot.style.cursor = 'pointer';
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToPage(index);
            updateActiveDot(index);
        });
    });

    // Prevent manual scrolling/swiping
    productsGrid.addEventListener('touchstart', (e) => {
        if (!isProgrammaticScroll) {
            e.preventDefault();
        }
    }, { passive: false });
    
    productsGrid.addEventListener('touchmove', (e) => {
        if (!isProgrammaticScroll) {
            e.preventDefault();
        }
    }, { passive: false });
    
    productsGrid.addEventListener('wheel', (e) => {
        if (!isProgrammaticScroll) {
            e.preventDefault();
        }
    }, { passive: false });
    
    // Update active dot only when scrolling programmatically
    let scrollTimeout;
    const handleScroll = () => {
        if (!isProgrammaticScroll) return;
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            const currentPage = getCurrentPage();
            updateActiveDot(currentPage);
        }, 100);
    };

    productsGrid.addEventListener('scroll', handleScroll);

    // Update on window resize
    window.addEventListener('resize', () => {
        const currentPage = getCurrentPage();
        updateActiveDot(currentPage);
    });

    // Initialize active dot
    updateActiveDot(0);
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProductsPagination);
} else {
    initProductsPagination();
}

// Reviews pagination dots functionality
const initReviewsPagination = () => {
    const reviewsPagination = document.querySelector('.reviews-pagination');
    const reviewsCards = document.querySelectorAll('.review-card');
    const reviewsPaginationDots = document.querySelectorAll('.reviews-pagination .pagination-dot');

    if (!reviewsPagination || reviewsPaginationDots.length === 0 || reviewsCards.length === 0) {
        return;
    }
    // Get visible cards count for reviews
    const getVisibleReviewsCount = () => {
        if (window.innerWidth >= 1200) {
            return 3; // Desktop: 3 cards visible
        } else if (window.innerWidth >= 768) {
            return 2; // Tablet: 2 cards visible
        } else {
            return 1; // Mobile: 1 card visible
        }
    };

    // Calculate total pages for reviews
    const getTotalReviewPages = () => {
        const visibleCount = getVisibleReviewsCount();
        return Math.ceil(reviewsCards.length / visibleCount);
    };

    // Scroll to specific review page
    const scrollToReviewPage = (pageIndex) => {
        const reviewsContainer = document.querySelector('.reviews-cards');
        if (!reviewsContainer || !reviewsCards.length) return;

        // For tablet and desktop, scroll horizontally
        if (window.innerWidth >= 768) {
            const cardWidth = reviewsCards[0]?.offsetWidth || 344;
            const gap = window.innerWidth >= 1200 ? 28 : 16;
            const cardWithGap = cardWidth + gap;
            const visibleCount = getVisibleReviewsCount();
            const scrollPosition = pageIndex * cardWithGap * visibleCount;
            
            // Scroll the reviews container into view if needed
            reviewsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            
            // If container is scrollable, scroll it
            if (reviewsContainer.scrollWidth > reviewsContainer.clientWidth) {
                reviewsContainer.scrollTo({
                    left: scrollPosition,
                    behavior: 'smooth'
                });
            } else {
                // Scroll the page to show the card
                const targetCard = reviewsCards[pageIndex * visibleCount];
                if (targetCard) {
                    targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
                }
            }
        } else {
            // For mobile, show/hide cards
            const visibleCount = getVisibleReviewsCount();
            const startIndex = pageIndex * visibleCount;
            const endIndex = startIndex + visibleCount;
            
            reviewsCards.forEach((card, index) => {
                if (index >= startIndex && index < endIndex) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        }
    };

    // Update active review dot
    const updateActiveReviewDot = (activeIndex) => {
        reviewsPaginationDots.forEach((dot, index) => {
            if (index === activeIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    };

    // Add click handlers to review pagination dots
    reviewsPaginationDots.forEach((dot, index) => {
        dot.style.cursor = 'pointer';
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToReviewPage(index);
            updateActiveReviewDot(index);
        });
    });

    // Initialize active review dot
    updateActiveReviewDot(0);
};

// Initialize reviews pagination when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReviewsPagination);
} else {
    initReviewsPagination();
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
