// ===== TimeTravel Agency — Chatbot Widget with Mistral AI =====
(function () {
  'use strict';

  const MISTRAL_API_KEY = 'tTKKk6yR6BDvrBlNHtmcDv2p6P1zV5Lb';
  const MISTRAL_MODEL = 'mistral-large-latest';
  const MISTRAL_ENDPOINT = 'https://api.mistral.ai/v1/chat/completions';

  function getSystemPrompt(lang) {
    let langInstruction = "Tu parles UNIQUEMENT en français.";
    if (lang === 'en') langInstruction = "You speak ONLY in English.";
    if (lang === 'es') langInstruction = "Hablas ÚNICAMENTE en español.";

    return `Tu es un assistant virtuel expert de l'agence de voyage temporel "TimeTravel Agency".
${langInstruction} Tu es enthousiaste, chaleureux et très professionnel.
Tu aides les clients à choisir leurs destinations temporelles et répondre à toutes leurs questions.

=== DESTINATIONS ===
🏛️ L'Antiquité (2500 av. J.C. – 476 ap. J.C.)
  - Visiter les pyramides d'Égypte, la Grèce classique, l'Empire romain
  - Prix: à partir de 5 000 € (3 jours) / 9 500 € (7 jours) / 17 000 € (14 jours) / 24 000 € (21 jours)
  - Points d'intérêt: Grande Pyramide de Gizeh, Acropole d'Athènes, Colisée de Rome, Bibliothèque d'Alexandrie

🏰 Le Moyen-Âge (476 – 1453 ap. J.C.)
  - Chevaliers, châteaux féodaux, tournois, villages médiévaux
  - Prix: à partir de 4 500 € (3 jours) / 8 500 € (7 jours) / 15 000 € (14 jours) / 21 000 € (21 jours)
  - Points d'intérêt: Château de Carcassonne, tournois de chevalerie, foires médiévales, abbayes

🚀 Le Futur (2100 – 2500 ap. J.C.)
  - Villes flottantes, IA avancée, voyages interplanétaires
  - Prix: à partir de 6 500 € (3 jours) / 12 000 € (7 jours) / 22 000 € (14 jours) / 31 000 € (21 jours)
  - Points d'intérêt: Cités aériennes de NéoTokyo, Centre IA d'Athena-7, Colonie martienne Alpha

=== FORMULES DE SÉJOUR ===
- Mini-séjour (3 jours): expérience express, idéal pour les découvreurs
- Séjour Standard (7 jours): immersion complète, notre formule la plus populaire
- Séjour Premium (14 jours): exploration approfondie
- Séjour Luxe (21 jours): expérience ultime avec services VIP

=== SERVICES INCLUS ===
- Transport temporel aller-retour sécurisé
- Hébergement dans des lieux d'époque authentiques
- Guide personnel spécialisé 24h/24
- Assurance temporelle complète (paradoxes couverts)
- Équipement de camouflage d'époque fourni
- Briefing historique et linguistique pré-voyage
- Monitoring chrono-médical continu

=== SÉCURITÉ ===
- Protocole de sécurité temporelle certifié ISO-9001-T
- Équipe d'intervention chrono-médicale disponible 24/7
- Assurance anti-paradoxe incluse
- Zone d'observation passive uniquement (pas d'interaction modifiable)
- Bracelet de rappel d'urgence fourni

=== RÉSERVATION ===
- Acompte de 30% à la réservation
- Solde 30 jours avant le départ
- Annulation gratuite jusqu'à 60 jours avant le départ
- Paiement par virement, CB ou crypto acceptés

=== FAQ ===
- Durée minimale: 3 jours
- Âge minimum: 18 ans (16 ans avec accord parental)
- Santé requise: bilan médical obligatoire avant le voyage
- Bagages: limités à 10kg, liste fournie à la réservation
- Paradoxes: notre technologie de "bulles temporelles" les empêche naturellement

Réponds de manière concise, précise et avec une touche d'émerveillement. Utilise des emojis pertinents.`;
  }

  // ===== I18n =====
  const botI18n = {
    fr: {
        online: "En ligne",
        placeholder: "Posez-moi vos questions sur les voyages temporels...",
        sug_dest: "🗺️ Destinations",
        sug_price: "💰 Tarifs",
        sug_tips: "🔮 Conseils",
        sug_faq: "❓ FAQ",
        msg_1: "Bonjour! 👋 Je suis **Chrono**, votre agent IA de voyage temporel.",
        msg_2: "Je peux vous aider à choisir votre époque, vous informer sur nos destinations, nos prix et organiser votre aventure dans le temps. ⏳✨",
        error: "❌ Désolé, je rencontre une difficulté technique. Veuillez réessayer dans un instant."
    },
    en: {
        online: "Online",
        placeholder: "Ask me anything about time travel...",
        sug_dest: "🗺️ Destinations",
        sug_price: "💰 Pricing",
        sug_tips: "🔮 Tips",
        sug_faq: "❓ FAQ",
        msg_1: "Hello! 👋 I am **Chrono**, your Time Travel AI agent.",
        msg_2: "I can help you choose your epoch, inform you about our destinations and prices, and organize your adventure through time. ⏳✨",
        error: "❌ Sorry, I am experiencing a technical difficulty. Please try again in a moment."
    },
    es: {
        online: "En línea",
        placeholder: "Pregúntame sobre viajes en el tiempo...",
        sug_dest: "🗺️ Destinos",
        sug_price: "💰 Precios",
        sug_tips: "🔮 Consejos",
        sug_faq: "❓ FAQ",
        msg_1: "¡Hola! 👋 Soy **Chrono**, tu agente de IA de viajes en el tiempo.",
        msg_2: "Puedo ayudarte a elegir tu época, informarte sobre destinos y precios, y organizar tu aventura a través del tiempo. ⏳✨",
        error: "❌ Lo siento, estoy experimentando una dificultad técnica. Por favor, inténtalo de nuevo en un momento."
    }
  };

  function getLang() {
    return localStorage.getItem('language') || 'fr';
  }

  function getT(key) {
    const lang = getLang();
    return botI18n[lang][key] || botI18n['fr'][key];
  }

  // ===== State =====
  let isOpen = false;
  let conversationHistory = [];
  let isTyping = false;

  // ===== Create DOM Elements =====
  function createWidget() {
    // Inject CSS
    const style = document.createElement('style');
    style.textContent = getCSSStyles();
    document.head.appendChild(style);

    // Floating button
    const fab = document.createElement('button');
    fab.id = 'tt-chatbot-fab';
    fab.className = 'tt-fab';
    fab.setAttribute('aria-label', 'Ouvrir le chat');
    fab.innerHTML = `
      <span class="tt-fab-icon tt-fab-open">💬</span>
      <span class="tt-fab-icon tt-fab-close" style="display:none">✕</span>
      <span class="tt-fab-pulse"></span>
    `;
    fab.addEventListener('click', toggleChat);

    // Chat window
    const chatWindow = document.createElement('div');
    chatWindow.id = 'tt-chatbot-window';
    chatWindow.className = 'tt-chat-window';
    chatWindow.setAttribute('role', 'dialog');
    chatWindow.setAttribute('aria-label', 'Chat TimeTravel Agency');
    chatWindow.innerHTML = `
      <div class="tt-chat-header">
        <div class="tt-chat-header-info">
          <div class="tt-agent-avatar">⏰</div>
          <div>
            <div class="tt-agent-name">Chrono — Agent IA</div>
            <div class="tt-agent-status"><span class="tt-status-dot"></span> <span id="tt-status-text">${getT('online')}</span></div>
          </div>
        </div>
        <button class="tt-close-btn" id="tt-close-btn" aria-label="Fermer">✕</button>
      </div>

      <div class="tt-chat-messages" id="tt-messages">
        <!-- Welcome messages injected by JS -->
      </div>

      <div class="tt-chat-suggestions" id="tt-suggestions">
        <button class="tt-suggestion-chip" id="tt-sug-dest" onclick="ttAskSuggestion(this.innerText)">${getT('sug_dest')}</button>
        <button class="tt-suggestion-chip" id="tt-sug-price" onclick="ttAskSuggestion(this.innerText)">${getT('sug_price')}</button>
        <button class="tt-suggestion-chip" id="tt-sug-tips" onclick="ttAskSuggestion(this.innerText)">${getT('sug_tips')}</button>
        <button class="tt-suggestion-chip" id="tt-sug-faq" onclick="ttAskSuggestion(this.innerText)">${getT('sug_faq')}</button>
      </div>

      <div class="tt-chat-input-area">
        <input
          type="text"
          id="tt-user-input"
          class="tt-chat-input"
          placeholder="${getT('placeholder')}"
          maxlength="500"
          autocomplete="off"
        />
        <button class="tt-send-btn" id="tt-send-btn" aria-label="Envoyer">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
          </svg>
        </button>
      </div>
    `;

    document.body.appendChild(fab);
    document.body.appendChild(chatWindow);

    // Event listeners
    document.getElementById('tt-close-btn').addEventListener('click', toggleChat);
    document.getElementById('tt-send-btn').addEventListener('click', sendMessage);
    document.getElementById('tt-user-input').addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });

    // Show welcome messages
    showWelcomeMessages();
  }

  // Update strings dynamically on language change
  window.updateChatbotLanguage = function() {
    const statusText = document.getElementById('tt-status-text');
    if (statusText) statusText.innerText = getT('online');
    
    const input = document.getElementById('tt-user-input');
    if (input) input.placeholder = getT('placeholder');
    
    const sugDest = document.getElementById('tt-sug-dest');
    if (sugDest) sugDest.innerText = getT('sug_dest');
    
    const sugPrice = document.getElementById('tt-sug-price');
    if (sugPrice) sugPrice.innerText = getT('sug_price');
    
    const sugTips = document.getElementById('tt-sug-tips');
    if (sugTips) sugTips.innerText = getT('sug_tips');
    
    const sugFaq = document.getElementById('tt-sug-faq');
    if (sugFaq) sugFaq.innerText = getT('sug_faq');
    
    // Only update welcome messages if no custom messages have been sent
    if (conversationHistory.length === 0) {
        const msgs = document.getElementById('tt-messages');
        if (msgs) msgs.innerHTML = '';
        showWelcomeMessages();
    }
  };

  function showWelcomeMessages() {
    setTimeout(() => {
      appendBotMessage(getT('msg_1'));
    }, 300);
    setTimeout(() => {
      appendBotMessage(getT('msg_2'));
    }, 900);
  }

  // ===== Toggle chat window =====
  function toggleChat() {
    isOpen = !isOpen;
    const win = document.getElementById('tt-chatbot-window');
    const fab = document.getElementById('tt-chatbot-fab');
    const openIcon = fab.querySelector('.tt-fab-open');
    const closeIcon = fab.querySelector('.tt-fab-close');

    if (isOpen) {
      win.classList.add('tt-chat-open');
      fab.classList.add('tt-fab-active');
      openIcon.style.display = 'none';
      closeIcon.style.display = 'block';
      setTimeout(() => {
        const input = document.getElementById('tt-user-input');
        if (input) input.focus();
      }, 350);
    } else {
      win.classList.remove('tt-chat-open');
      fab.classList.remove('tt-fab-active');
      openIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    }
  }

  // ===== Send message =====
  async function sendMessage() {
    if (isTyping) return;
    const input = document.getElementById('tt-user-input');
    const text = input.value.trim();
    if (!text) return;

    input.value = '';
    hideSuggestions();

    appendUserMessage(text);
    conversationHistory.push({ role: 'user', content: text });

    showTypingIndicator();

    try {
      const reply = await callMistralAPI();
      hideTypingIndicator();
      appendBotMessage(reply);
      conversationHistory.push({ role: 'assistant', content: reply });
    } catch (err) {
      hideTypingIndicator();
      appendBotMessage(getT('error'));
      console.error('[TimeTravel Chatbot]', err);
    }
  }

  // ===== Mistral API call =====
  async function callMistralAPI() {
    const messages = [
      { role: 'system', content: getSystemPrompt(getLang()) },
      ...conversationHistory
    ];

    const response = await fetch(MISTRAL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MISTRAL_API_KEY}`
      },
      body: JSON.stringify({
        model: MISTRAL_MODEL,
        messages: messages,
        max_tokens: 600,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Mistral API error ${response.status}: ${err}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  }

  // ===== Message rendering =====
  function appendBotMessage(text) {
    const container = document.getElementById('tt-messages');
    const div = document.createElement('div');
    div.className = 'tt-message tt-bot-message';

    const avatar = document.createElement('div');
    avatar.className = 'tt-bot-avatar';
    avatar.textContent = '⏰';

    const bubble = document.createElement('div');
    bubble.className = 'tt-bubble tt-bot-bubble';
    bubble.innerHTML = formatMessage(text);

    div.appendChild(avatar);
    div.appendChild(bubble);
    container.appendChild(div);
    scrollToBottom();
  }

  function appendUserMessage(text) {
    const container = document.getElementById('tt-messages');
    const div = document.createElement('div');
    div.className = 'tt-message tt-user-message';

    const bubble = document.createElement('div');
    bubble.className = 'tt-bubble tt-user-bubble';
    bubble.textContent = text;

    div.appendChild(bubble);
    container.appendChild(div);
    scrollToBottom();
  }

  function formatMessage(text) {
    // Basic markdown-like formatting
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br>');
  }

  // ===== Typing indicator =====
  function showTypingIndicator() {
    isTyping = true;
    const container = document.getElementById('tt-messages');
    const div = document.createElement('div');
    div.className = 'tt-message tt-bot-message';
    div.id = 'tt-typing-indicator';

    const avatar = document.createElement('div');
    avatar.className = 'tt-bot-avatar';
    avatar.textContent = '⏰';

    const bubble = document.createElement('div');
    bubble.className = 'tt-bubble tt-bot-bubble tt-typing-bubble';
    bubble.innerHTML = '<span class="tt-dot"></span><span class="tt-dot"></span><span class="tt-dot"></span>';

    div.appendChild(avatar);
    div.appendChild(bubble);
    container.appendChild(div);
    scrollToBottom();
  }

  function hideTypingIndicator() {
    isTyping = false;
    const indicator = document.getElementById('tt-typing-indicator');
    if (indicator) indicator.remove();
  }

  // ===== Suggestions =====
  function hideSuggestions() {
    const s = document.getElementById('tt-suggestions');
    if (s) {
      s.style.opacity = '0';
      s.style.transform = 'translateY(10px)';
      setTimeout(() => { s.style.display = 'none'; }, 300);
    }
  }

  // Global function for suggestion chips onclick
  window.ttAskSuggestion = function (text) {
    const input = document.getElementById('tt-user-input');
    if (input) {
      input.value = text;
      sendMessage();
    }
  };

  // ===== Utilities =====
  function scrollToBottom() {
    const container = document.getElementById('tt-messages');
    if (container) container.scrollTop = container.scrollHeight;
  }

  // ===== CSS Styles =====
  function getCSSStyles() {
    return `
      /* ===== Chatbot Widget ===== */
      #tt-chatbot-fab {
        position: fixed;
        bottom: 28px;
        right: 28px;
        width: 62px;
        height: 62px;
        border-radius: 50%;
        background: linear-gradient(135deg, #b8860b, #ffd700, #b8860b);
        border: 2px solid rgba(255, 215, 0, 0.5);
        box-shadow: 0 6px 28px rgba(184, 134, 11, 0.55), 0 2px 8px rgba(0,0,0,0.4);
        cursor: pointer;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.6rem;
        transition: transform 0.25s cubic-bezier(.34,1.56,.64,1), box-shadow 0.25s ease;
        outline: none;
        overflow: visible;
      }

      #tt-chatbot-fab:hover {
        transform: scale(1.12) translateY(-2px);
        box-shadow: 0 10px 38px rgba(255, 215, 0, 0.65), 0 4px 12px rgba(0,0,0,0.5);
      }

      #tt-chatbot-fab.tt-fab-active {
        background: linear-gradient(135deg, #7c3aed, #a855f7);
        border-color: rgba(168, 85, 247, 0.5);
        box-shadow: 0 6px 28px rgba(168, 85, 247, 0.5);
      }

      .tt-fab-icon {
        line-height: 1;
        display: block;
        transition: transform 0.3s ease, opacity 0.3s ease;
      }

      .tt-fab-close {
        font-size: 1.3rem;
        font-weight: bold;
        color: #fff;
      }

      .tt-fab-pulse {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: rgba(255, 215, 0, 0.35);
        animation: tt-pulse 2.5s infinite;
        pointer-events: none;
      }

      @keyframes tt-pulse {
        0%   { transform: scale(1); opacity: 0.7; }
        70%  { transform: scale(1.55); opacity: 0; }
        100% { transform: scale(1.55); opacity: 0; }
      }

      /* ===== Chat Window ===== */
      .tt-chat-window {
        position: fixed;
        bottom: 104px;
        right: 28px;
        width: 380px;
        max-width: calc(100vw - 32px);
        height: 560px;
        max-height: calc(100vh - 140px);
        background: linear-gradient(160deg, #0c1128 0%, #0f172a 60%, #130f2e 100%);
        border: 1px solid rgba(255, 215, 0, 0.25);
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        box-shadow:
          0 25px 60px rgba(0,0,0,0.6),
          0 0 0 1px rgba(255, 215, 0, 0.08),
          inset 0 1px 0 rgba(255, 255, 255, 0.05);
        z-index: 9998;
        overflow: hidden;
        transform: scale(0.85) translateY(30px);
        opacity: 0;
        pointer-events: none;
        transition:
          transform 0.35s cubic-bezier(.34,1.56,.64,1),
          opacity 0.3s ease;
        transform-origin: bottom right;
      }

      .tt-chat-window.tt-chat-open {
        transform: scale(1) translateY(0);
        opacity: 1;
        pointer-events: all;
      }

      /* ===== Header ===== */
      .tt-chat-header {
        padding: 14px 18px;
        background: linear-gradient(135deg, rgba(184, 134, 11, 0.15), rgba(255, 215, 0, 0.08));
        border-bottom: 1px solid rgba(255, 215, 0, 0.2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        backdrop-filter: blur(10px);
      }

      .tt-chat-header-info {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .tt-agent-avatar {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background: linear-gradient(135deg, #b8860b, #ffd700);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.3rem;
        box-shadow: 0 0 12px rgba(255, 215, 0, 0.4);
        flex-shrink: 0;
      }

      .tt-agent-name {
        font-weight: 700;
        font-size: 0.95rem;
        color: #ffd700;
        letter-spacing: 0.02em;
      }

      .tt-agent-status {
        font-size: 0.75rem;
        color: rgba(241, 245, 249, 0.65);
        display: flex;
        align-items: center;
        gap: 5px;
        margin-top: 2px;
      }

      .tt-status-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #10b981;
        box-shadow: 0 0 6px #10b981;
        animation: tt-blink 2s infinite;
      }

      @keyframes tt-blink {
        0%, 100% { opacity: 1; }
        50%       { opacity: 0.4; }
      }

      .tt-close-btn {
        background: rgba(255, 255, 255, 0.07);
        border: 1px solid rgba(255, 215, 0, 0.2);
        color: rgba(241, 245, 249, 0.7);
        width: 30px;
        height: 30px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
        flex-shrink: 0;
      }

      .tt-close-btn:hover {
        background: rgba(255, 215, 0, 0.15);
        color: #ffd700;
        transform: rotate(90deg);
      }

      /* ===== Messages Area ===== */
      .tt-chat-messages {
        flex: 1;
        overflow-y: auto;
        padding: 16px 14px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        scrollbar-width: thin;
        scrollbar-color: rgba(255, 215, 0, 0.3) transparent;
      }

      .tt-chat-messages::-webkit-scrollbar {
        width: 4px;
      }
      .tt-chat-messages::-webkit-scrollbar-track { background: transparent; }
      .tt-chat-messages::-webkit-scrollbar-thumb {
        background: rgba(255, 215, 0, 0.3);
        border-radius: 4px;
      }

      /* ===== Message Rows ===== */
      .tt-message {
        display: flex;
        align-items: flex-end;
        gap: 8px;
        animation: tt-slideUp 0.35s cubic-bezier(.34,1.2,.64,1) both;
      }

      @keyframes tt-slideUp {
        from { opacity: 0; transform: translateY(16px); }
        to   { opacity: 1; transform: translateY(0); }
      }

      .tt-bot-message { justify-content: flex-start; }
      .tt-user-message { justify-content: flex-end; }

      .tt-bot-avatar {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: linear-gradient(135deg, #7c3aed, #b8860b);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.85rem;
        flex-shrink: 0;
        box-shadow: 0 0 8px rgba(184, 134, 11, 0.3);
      }

      /* ===== Bubbles ===== */
      .tt-bubble {
        max-width: 78%;
        padding: 10px 14px;
        border-radius: 18px;
        font-size: 0.875rem;
        line-height: 1.55;
        word-wrap: break-word;
      }

      .tt-bot-bubble {
        background: linear-gradient(135deg, rgba(184, 134, 11, 0.12), rgba(255, 215, 0, 0.06));
        border: 1px solid rgba(255, 215, 0, 0.2);
        border-bottom-left-radius: 4px;
        color: #e2e8f0;
      }

      .tt-user-bubble {
        background: linear-gradient(135deg, #b8860b, #d4a017, #ffd700);
        color: #0c1128;
        border-bottom-right-radius: 4px;
        font-weight: 500;
        box-shadow: 0 4px 16px rgba(184, 134, 11, 0.35);
      }

      /* ===== Typing indicator ===== */
      .tt-typing-bubble {
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 12px 18px;
      }

      .tt-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #ffd700;
        animation: tt-typing 1.2s infinite;
        opacity: 0.5;
      }

      .tt-dot:nth-child(2) { animation-delay: 0.2s; }
      .tt-dot:nth-child(3) { animation-delay: 0.4s; }

      @keyframes tt-typing {
        0%, 100% { transform: translateY(0); opacity: 0.4; }
        50%       { transform: translateY(-5px); opacity: 1; }
      }

      /* ===== Suggestion Chips ===== */
      .tt-chat-suggestions {
        padding: 8px 14px 4px;
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        flex-shrink: 0;
        transition: opacity 0.3s ease, transform 0.3s ease;
      }

      .tt-suggestion-chip {
        background: rgba(184, 134, 11, 0.12);
        border: 1px solid rgba(255, 215, 0, 0.28);
        color: #ffd700;
        padding: 5px 12px;
        border-radius: 50px;
        font-size: 0.78rem;
        cursor: pointer;
        transition: all 0.2s ease;
        white-space: nowrap;
      }

      .tt-suggestion-chip:hover {
        background: rgba(255, 215, 0, 0.2);
        border-color: #ffd700;
        transform: translateY(-1px);
        box-shadow: 0 3px 10px rgba(184, 134, 11, 0.3);
      }

      /* ===== Input Area ===== */
      .tt-chat-input-area {
        padding: 12px 14px;
        border-top: 1px solid rgba(255, 215, 0, 0.15);
        display: flex;
        gap: 8px;
        align-items: center;
        flex-shrink: 0;
        background: rgba(12, 17, 40, 0.5);
      }

      .tt-chat-input {
        flex: 1;
        padding: 10px 16px;
        background: rgba(255, 215, 0, 0.05);
        border: 1px solid rgba(255, 215, 0, 0.2);
        border-radius: 25px;
        color: #f1f5f9;
        font-size: 0.875rem;
        outline: none;
        transition: border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }

      .tt-chat-input::placeholder {
        color: rgba(241, 245, 249, 0.35);
        font-size: 0.82rem;
      }

      .tt-chat-input:focus {
        border-color: rgba(255, 215, 0, 0.55);
        background: rgba(255, 215, 0, 0.08);
        box-shadow: 0 0 14px rgba(255, 215, 0, 0.12);
      }

      .tt-send-btn {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: linear-gradient(135deg, #b8860b, #ffd700);
        border: none;
        color: #0c1128;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.25s cubic-bezier(.34,1.56,.64,1);
        box-shadow: 0 4px 14px rgba(184, 134, 11, 0.4);
        flex-shrink: 0;
        outline: none;
      }

      .tt-send-btn:hover {
        transform: scale(1.12) translateY(-1px);
        box-shadow: 0 7px 20px rgba(255, 215, 0, 0.5);
      }

      .tt-send-btn:active {
        transform: scale(0.95);
      }

      /* ===== Responsive ===== */
      @media (max-width: 460px) {
        .tt-chat-window {
          bottom: 90px;
          right: 12px;
          width: calc(100vw - 24px);
          height: calc(100vh - 120px);
        }
        #tt-chatbot-fab {
          right: 16px;
          bottom: 20px;
        }
      }
    `;
  }

  // ===== Init =====
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createWidget);
  } else {
    createWidget();
  }

})();
