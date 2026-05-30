// ===== Epoch Pages Specific Scripts =====

// ===== Theme Toggle =====
function toggleDarkMode() {
    document.body.classList.toggle('light-mode');
    const isLightMode = document.body.classList.contains('light-mode');
    localStorage.setItem('lightMode', isLightMode);

    // Update button appearance
    const btns = document.querySelectorAll('.icon-btn[onclick*="toggleDarkMode"]');
    btns.forEach(btn => {
        btn.textContent = isLightMode ? '🌙' : '☀️';
    });
}

// Initialize theme from localStorage
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('lightMode') === 'true') {
        document.body.classList.add('light-mode');
        const btns = document.querySelectorAll('.icon-btn[onclick*="toggleDarkMode"]');
        btns.forEach(btn => {
            btn.textContent = '🌙';
        });
    } else {
        const btns = document.querySelectorAll('.icon-btn[onclick*="toggleDarkMode"]');
        btns.forEach(btn => {
            btn.textContent = '☀️'; // Default is dark, so show Sun to switch to light
        });
    }

    // Check for pre-selected epoch in booking form
    const urlParams = new URLSearchParams(window.location.search);
    const epoch = urlParams.get('epoch');
    if (epoch) {
        const interestCheckbox = document.querySelector(`input[value="${epoch}"]`);
        if (interestCheckbox) {
            interestCheckbox.checked = true;
        }
    }
});

// ===== Favorites Functionality =====
function toggleFavorite() {
    const btn = event.target.closest('.icon-btn');
    if (btn) {
        const isFavorited = btn.classList.toggle('favorited');
        btn.style.color = isFavorited ? 'var(--secondary-color)' : 'inherit';

        // Get current epoch
        const h1 = document.querySelector('.epoch-hero-content h1');
        if (h1) {
            const epochName = h1.textContent;
            const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

            if (isFavorited) {
                if (!favorites.includes(epochName)) {
                    favorites.push(epochName);
                }
            } else {
                const index = favorites.indexOf(epochName);
                if (index > -1) {
                    favorites.splice(index, 1);
                }
            }

            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
    }
}

// Initialize favorite button state
function initFavoritesButton() {
    const h1 = document.querySelector('.epoch-hero-content h1');
    if (h1) {
        const epochName = h1.textContent;
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

        if (favorites.includes(epochName)) {
            const favoriteBtn = document.querySelector('.icon-btn[onclick*="toggleFavorite"]');
            if (favoriteBtn) {
                favoriteBtn.classList.add('favorited');
                favoriteBtn.style.color = 'var(--secondary-color)';
            }
        }
    }
}

// ===== Gallery Thumbnail Functionality =====
function initGalleryThumbnails() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const main = document.querySelector('.gallery-main');

    if (!main) return;

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            main.src = thumb.src;

            // Remove active class from all thumbnails
            thumbnails.forEach(t => t.style.borderColor = 'transparent');

            // Add active class to clicked thumbnail
            thumb.style.borderColor = 'var(--accent-cyan)';
        });
    });
}

// ===== Form Submission =====
function submitBooking(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    // Collect booking data
    const bookingData = {
        name: form.querySelector('input[placeholder*="Jean"]').value,
        email: form.querySelector('input[type="email"]').value,
        date: form.querySelector('input[type="date"]').value,
        travelers: form.querySelector('input[type="number"]').value,
        duration: form.querySelector('select:nth-of-type(1)').value,
        experience: form.querySelector('select:nth-of-type(2)').value,
        interests: Array.from(form.querySelectorAll('input[name="interests"]:checked')).map(cb => cb.value)
    };

    // Save to localStorage
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push({
        ...bookingData,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('bookings', JSON.stringify(bookings));

    // Create and show success modal
    const overlay = document.createElement('div');
    overlay.className = 'booking-modal-overlay';

    // Convert duration/experience values to readable text
    let durationText = bookingData.duration ? `${bookingData.duration} jours` : 'Non spécifié';
    let experienceText = bookingData.experience || 'Non spécifié';
    if (bookingData.experience === 'adventure') experienceText = 'Aventure 🎯';
    if (bookingData.experience === 'discovery') experienceText = 'Découverte 🔍';
    if (bookingData.experience === 'luxury') experienceText = 'Luxe 👑';

    overlay.innerHTML = `
        <div class="booking-modal">
            <h2>🎉 Voyage Confirmé !</h2>
            <p>Vos informations ont bien été transmises à l'agence.</p>
            <div class="booking-summary">
                <p><strong>Voyageur :</strong> ${bookingData.name}</p>
                <p><strong>Email :</strong> ${bookingData.email}</p>
                <p><strong>Départ :</strong> ${bookingData.date}</p>
                <p><strong>Personnes :</strong> ${bookingData.travelers}</p>
                <p><strong>Durée :</strong> ${durationText}</p>
                <p><strong>Expérience :</strong> ${experienceText}</p>
            </div>
            <button class="btn btn-primary" onclick="this.closest('.booking-modal-overlay').remove()">Excellent !</button>
        </div>
    `;

    document.body.appendChild(overlay);

    // Trigger animation
    setTimeout(() => {
        overlay.classList.add('active');
    }, 10);

    // Reset form
    form.reset();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== Experience Selection Handler =====
function initExperienceSelection() {
    const radios = document.querySelectorAll('input[name="experience"]');
    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            console.log(`Experience selected: ${radio.value}`);
        });
    });
}

// ===== Parallax Effect for Hero ===== 
function initHeroParallax() {
    const hero = document.querySelector('.epoch-hero');
    if (!hero) return;

    document.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition < window.innerHeight) {
            hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
        }
    });
}

// ===== Smooth Scroll for Sections =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===== POI Card Animation =====
function initPoiAnimations() {
    const poiCards = document.querySelectorAll('.poi-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    poiCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// ===== Info Card Animations =====
function initInfoAnimations() {
    const infoCards = document.querySelectorAll('.info-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    infoCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
}

// ===== Accessibility - Active Link Highlighting =====
function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');

    document.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.style.color = 'var(--light-text)';
            if (link.getAttribute('href').slice(1) === current) {
                link.style.color = 'var(--accent-cyan)';
            }
        });
    });
}

// ===== Keyboard Navigation =====
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // 'D' for dark mode
        if (e.key === 'd' || e.key === 'D') {
            if (!e.target.matches('input, textarea')) {
                toggleDarkMode.call({ target: document.querySelector('.icon-btn[onclick*="toggleDarkMode"]') });
            }
        }

        // 'F' for favorite
        if (e.key === 'f' || e.key === 'F') {
            if (!e.target.matches('input, textarea')) {
                toggleFavorite.call({ target: document.querySelector('.icon-btn[onclick*="toggleFavorite"]') });
            }
        }

        // 'L' for language
        if (e.key === 'l' || e.key === 'L') {
            if (!e.target.matches('input, textarea')) {
                toggleLanguage();
            }
        }
    });
}

// ===== Initialize All =====
document.addEventListener('DOMContentLoaded', () => {
    initFavoritesButton();
    initGalleryThumbnails();
    initExperienceSelection();
    initHeroParallax();
    initSmoothScroll();
    initPoiAnimations();
    initInfoAnimations();
    updateActiveLink();
    initKeyboardNavigation();

    // Initialize chatbot with epoch-specific message
    const h1 = document.querySelector('.epoch-hero-content h1');
    if (h1) {
        const epochName = h1.textContent.split(' ')[1]; // Get epoch name after emoji
        initEpochChatbot(epochName);
    }
});

// ===== Epoch-Specific Chatbot =====
function initEpochChatbot(epochName) {
    const chatMessages = document.getElementById('chatMessages');

    if (chatMessages) {
        chatMessages.innerHTML = '';

        const welcomeMsg = document.createElement('div');
        welcomeMsg.className = 'message bot-message';
        welcomeMsg.innerHTML = `<p>Bienvenue dans ${epochName}! 👋 Je suis votre guide IA TimeTravel. Comment puis-je vous aider à préparer votre voyage?</p>`;
        chatMessages.appendChild(welcomeMsg);
    }
}

// ===== Music Toggle (Ambient Sounds) =====
function createAmbientMusic() {
    const audioHTML = `
        <audio id="ambient-audio" style="display: none;">
            <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
        </audio>
    `;

    if (!document.getElementById('ambient-audio')) {
        document.body.insertAdjacentHTML('beforeend', audioHTML);
    }
}

function toggleAmbientMusic() {
    const audio = document.getElementById('ambient-audio');
    if (!audio) {
        createAmbientMusic();
        return;
    }

    if (audio.paused) {
        audio.volume = 0.3; // 30% volume
        audio.play().catch(err => {
            console.log('Audio playback failed:', err);
        });
    } else {
        audio.pause();
    }
}

// Initialize ambient music option
document.addEventListener('DOMContentLoaded', () => {
    createAmbientMusic();
});

console.log('%c🏛️ Epoch Page Initialized', 'color: #06b6d4; font-size: 16px; font-weight: bold;');
console.log('%cKeyboard shortcuts: D (Dark mode), F (Favorite), L (Language)', 'color: #a855f7;');
