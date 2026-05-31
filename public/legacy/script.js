// ===== Chatbot Functionality =====
const chatbotResponses = {
    // Greetings
    'bonjour': {
        response: "Bonjour! 👋 Comment puis-je vous aider aujourd'hui? Voulez-vous explorer nos destinations ou en savoir plus sur nos services?",
        keywords: ['bonjour', 'salut', 'coucou', 'hi', 'hello']
    },
    'merci': {
        response: "De rien! 😊 C'est un plaisir de vous aider. Y a-t-il autre chose que je puisse faire pour vous?",
        keywords: ['merci', 'gracias', 'thanks']
    },
    
    // Recommendations
    'recommandation': {
        response: "Excellent! 🎯 Pour vous recommander l'époque idéale, dites-moi: Aimez-vous l'histoire ancienne, le moyen-âge ou êtes-vous plutôt attiré par les technologies futuristes?",
        keywords: ['recommandation', 'suggestion', 'conseil', 'help', 'recommendation']
    },
    
    // Epochs - Antiquity
    'antiquité': {
        response: "🏛️ L'Antiquité est magnifique! Vous pouvez:\n• Visiter les pyramides d'Égypte\n• Explorer la Grèce antique\n• Vivre dans l'empire romain\n\nQuelle période spécifique vous intéresse?",
        keywords: ['antiquité', 'ancienne', 'egypte', 'rome', 'grèce', 'ancient', 'egypt', 'rome', 'greece']
    },
    
    // Epochs - Middle Ages
    'moyen-âge': {
        response: "🏰 Le Moyen-Âge est fascinant! Vous pouvez:\n• Rencontrer des chevaliers\n• Explorer les châteaux féodaux\n• Participer aux grands tournois\n• Vivre dans des villages médiévaux\n\nVous préférez la chevalerie ou la vie quotidienne?",
        keywords: ['moyen-âge', 'medieval', 'château', 'chevalier', 'middle ages', 'knight', 'castle']
    },
    
    // Epochs - Future
    'futur': {
        response: "🚀 Le Futur est extraordinaire! Vous découvrirez:\n• Des villes flottantes et des technologies avancées\n• L'intelligence artificielle de demain\n• Les innovations qui changeront l'humanité\n• Une expérience vraiment immersive\n\nQuelle vision du futur vous attire?",
        keywords: ['futur', 'future', '2100', '2500', 'technologie', 'technology', 'ai', 'flying cities']
    },
    
    // Safety and Conditions
    'sécurité': {
        response: "🛡️ Excellente question! La sécurité est notre priorité:\n✓ Tous les voyages sont supervisés par des experts\n✓ Équipement de protection avant chaque voyage\n✓ Assurance complète incluse\n✓ Équipes d'intervention 24/7\n\nY a-t-il des risques spécifiques qui vous préoccupent?",
        keywords: ['sécurité', 'danger', 'risque', 'safety', 'dangerous', 'risk', 'protection']
    },
    
    // Pricing
    'prix': {
        response: "💰 Voici nos tarifs:\n🏛️ Antiquité: À partir de 5,000€\n🏰 Moyen-Âge: À partir de 4,500€\n🚀 Futur: À partir de 6,500€\n\nLes prix incluent transport, hébergement et guide. Des forfaits groupe disponibles. Voulez-vous connaître les options de paiement?",
        keywords: ['prix', 'tarif', 'coût', 'combien', 'price', 'cost', 'how much']
    },
    
    // Booking
    'réservation': {
        response: "📅 Pour réserver, vous pouvez:\n1. Cliquer sur 'Réserver maintenant' dans la page de destination\n2. Remplir le formulaire avec vos infos\n3. Choisir vos dates et type d'expérience\n4. Recevoir confirmation par email\n\nQuelle époque souhaitez-vous explorer?",
        keywords: ['réservation', 'booking', 'réserver', 'book', 'how to book', 'dates']
    },
    
    // Travel duration
    'durée': {
        response: "⏱️ Les séjours sont flexibles:\n• Mini-séjour: 3 jours (expérience express)\n• Séjour standard: 7 jours (immersion complète)\n• Séjour premium: 14 jours (exploration approfondie)\n• Séjour luxe: 21 jours (expérience ultime)\n\nQuelle durée vous intéresse?",
        keywords: ['durée', 'combien de jours', 'longueur', 'how long', 'duration', 'days', '3 days', '7 days', 'week']
    },
    
    // Activities
    'activités': {
        response: "🎭 Nos expériences proposent:\n✨ Aventure: défis et découvertes intenses\n🔍 Découverte: apprentissage et histoire\n👑 Luxe: confort et services premium\n🎯 Sur-mesure: créez votre propre voyage\n\nQuelle type d'expérience vous attire?",
        keywords: ['activités', 'activités', 'quoi faire', 'activities', 'what to do', 'adventure', 'experience']
    },
    
    // Default response
    'default': {
        response: "Intéressant! 🤔 Je n'ai pas bien compris votre question. Pouvez-vous me donner plus de détails? Vous pouvez également me demander:\n• Recommandations d'époque\n• Infos sur Antiquité, Moyen-Âge ou Futur\n• Sécurité du voyage\n• Tarifs et réservations\n• Durée des séjours"
    }
};

function toggleChatbot() {
    // Delegate to the new floating chatbot widget FAB
    const fab = document.getElementById('tt-chatbot-fab');
    if (fab) {
        fab.click();
    }
}

function sendChatMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    addMessageToChat(message, 'user');
    input.value = '';
    
    // Get bot response
    setTimeout(() => {
        const botResponse = getBotResponse(message);
        addMessageToChat(botResponse, 'bot');
    }, 300);
}

function handleChatInput(event) {
    if (event.key === 'Enter') {
        sendChatMessage();
    }
}

function addMessageToChat(message, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const p = document.createElement('p');
    p.innerHTML = message;
    messageDiv.appendChild(p);
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(userMessage) {
    const message = userMessage.toLowerCase().trim();
    
    // Check for keyword matches
    for (const [key, data] of Object.entries(chatbotResponses)) {
        if (key !== 'default') {
            if (data.keywords.some(keyword => message.includes(keyword))) {
                return data.response;
            }
        }
    }
    
    // Default response
    return chatbotResponses.default.response;
}

// ===== Smooth Scrolling Helper =====
function scrollToDetails(epoch) {
    alert(`🚀 Redirection vers la page des détails de ${epoch}!\n\nNote: Cette fonctionnalité sera disponible avec les pages de détails.`);
    // In a full project, this would navigate to the detail page
    // window.location.href = `/epoch-${epoch}.html`;
}

// ===== Parallax Effect =====
document.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.scrollY;
    
    if (hero && scrollPosition < window.innerHeight) {
        hero.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
});

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.epoch-card, .value-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== Dynamic Background Color on Scroll =====
const sections = document.querySelectorAll('section');
document.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });
    
    // Update nav highlight
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--accent-cyan)';
        }
    });
});

// ===== Mobile Menu (optional enhancement) =====
function initMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (!navMenu) return;
    
    // Close menu when link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            // Menu will auto-close due to smooth scroll
        });
    });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    
    // Add welcome message after a short delay
    setTimeout(() => {
        // Optional: auto-open chatbot on first visit
        // toggleChatbot();
    }, 1000);
});

// ===== Keyboard Shortcuts =====
document.addEventListener('keydown', (e) => {
    // Press '?' for help
    if (e.key === '?') {
        console.log('TimeTravel Agency - Keyboard Shortcuts:\n' +
                   '? - This help menu\n' +
                   'C - Open chatbot\n' +
                   'H - Go to hero section');
    }
    
    // Press 'C' to open chatbot
    if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
        e.preventDefault();
        toggleChatbot();
    }
});

// ===== Performance: Lazy Loading for Images =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

console.log('%c⏰ TimeTravel Agency', 'color: #06b6d4; font-size: 20px; font-weight: bold;');
console.log('%cBienvenue! Votre aventure à travers les temps commence ici.', 'color: #a855f7; font-size: 14px;');

// ===== Theme Toggle Functionality =====
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
});

// ===== Favorites Functionality =====
function openFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    if (favorites.length === 0) {
        alert('Vous n\'avez pas encore d\'époque en favoris. Visitez une époque et cliquez sur le ❤️ pour l\'ajouter!');
        return;
    }
    
    const message = 'Vos époque en favoris:\n' + favorites.join('\n') + '\n\nVisitez l\'une de ces époque?';
    alert(message);
}

// ===== Scroll to Details Helper =====
function scrollToDetails(epoch) {
    alert(`🚀 Redirection vers ${epoch}!\n\nNote: Cette fonctionnalité utilise les pages de détail.`);
}
