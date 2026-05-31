<script setup lang="ts">
useHead({
  title: 'TimeTravel Agency - Voyagez à travers les époques',
  htmlAttrs: { lang: 'fr' }
})
</script>

<template>
  <div>
    <AppNavbar />

    <!-- Hero Section -->
    <section id="hero" class="hero">
      <video class="hero-video" autoplay muted loop playsinline preload="metadata">
        <source src="/media/teaser.mp4" type="video/mp4" />
      </video>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 class="hero-title" data-i18n="hero_title">Voyagez à travers les époques</h1>
        <p class="hero-subtitle" data-i18n="hero_subtitle">
          Découvrez l'histoire, vivez l'aventure, écrivez votre légende
        </p>
        <div class="hero-cta">
          <button
            class="btn btn-primary"
            onclick="document.getElementById('destinations').scrollIntoView({behavior: 'smooth'})"
          >
            <span data-i18n="explore_destinations">Explorer les destinations</span>
          </button>
          <button class="btn btn-secondary" onclick="toggleChatbot()">
            <span data-i18n="discuss_ai">Discuter avec un agent IA</span>
          </button>
        </div>
      </div>
      <div class="scroll-indicator">
        <span data-i18n="scroll_more">↓ Découvrez plus</span>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about" data-aos="fade-up" data-aos-duration="700">
      <div class="about-container">
        <div class="about-content">
          <h2>TimeTravel Agency</h2>
          <p class="about-intro" data-i18n="about_intro">
            Plongez dans une expérience révolutionnaire où le temps n'est plus une limite, mais une destination.
          </p>

          <div class="values">
            <div class="value-card">
              <h3 data-i18n="innovation">Innovation</h3>
              <p data-i18n="innovation_desc">Technologie de voyage temporel de pointe</p>
            </div>
            <div class="value-card">
              <h3 data-i18n="immersion">Immersion</h3>
              <p data-i18n="immersion_desc">Expériences authentiques et immersives</p>
            </div>
            <div class="value-card">
              <h3 data-i18n="unique_exp">Expérience Unique</h3>
              <p data-i18n="unique_exp_desc">Créez vos propres souvenirs intemporels</p>
            </div>
          </div>
        </div>
        <div class="about-image">
          <img src="/photo/image_0.png" alt="Paris 1889" class="epoch-image" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>

    <!-- Destinations Preview Section -->
    <section id="destinations" class="destinations-preview" data-aos="fade-up" data-aos-duration="750">
      <div class="container">
        <h2 class="section-title" data-i18n="explore_epochs">Explorez les Époques</h2>
        <p class="section-subtitle" data-i18n="three_destinations">Trois destinations extraordinaires vous attendent</p>

        <div class="epochs-grid">
          <!-- Antiquity -->
          <div
            class="epoch-card antiquity"
            onclick="window.location.href='/epoch/cretaceous'"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div class="epoch-image-container">
              <img
                src="/photo/image_0%20(3).png"
                alt="Crétacé"
                class="epoch-image"
                loading="lazy"
                decoding="async"
              />
              <div class="epoch-overlay">
                <h3>Crétacé</h3>
                <p>-65 millions d'années</p>
              </div>
            </div>
            <div class="epoch-content">
              <h3>Crétacé</h3>
              <p>Une immersion aux derniers jours des dinosaures, entre nature sauvage et frissons primaires.</p>
              <button class="btn btn-outline" data-i18n="discover_more">Découvrir →</button>
            </div>
          </div>

          <!-- Middle Ages -->
          <div
            class="epoch-card middle-ages"
            onclick="window.location.href='/epoch/paris-1889'"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="800"
          >
            <div class="epoch-image-container">
              <img
                src="/photo/image_0.png"
                alt="Paris 1889"
                class="epoch-image"
                loading="lazy"
                decoding="async"
              />
              <div class="epoch-overlay">
                <h3>Paris 1889</h3>
                <p>Exposition Universelle & Belle Époque</p>
              </div>
            </div>
            <div class="epoch-content">
              <h3>Paris 1889</h3>
              <p>Élégance, cafés, arts et innovations au pied de la Tour Eiffel toute neuve.</p>
              <button class="btn btn-outline" data-i18n="discover_more">Découvrir →</button>
            </div>
          </div>

          <!-- Future -->
          <div
            class="epoch-card future"
            onclick="window.location.href='/epoch/florence-1504'"
            data-aos="fade-up"
            data-aos-delay="160"
            data-aos-duration="800"
          >
            <div class="epoch-image-container">
              <img
                src="/photo/image_0%20(7).png"
                alt="Florence 1504"
                class="epoch-image"
                loading="lazy"
                decoding="async"
              />
              <div class="epoch-overlay">
                <h3>Florence 1504</h3>
                <p>Renaissance & âge d’or artistique</p>
              </div>
            </div>
            <div class="epoch-content">
              <h3>Florence 1504</h3>
              <p>Un séjour au cœur des ateliers, des palais et des chefs‑d’œuvre de la Renaissance.</p>
              <button class="btn btn-outline" data-i18n="discover_more">Découvrir →</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section data-aos="fade-up" data-aos-duration="750" style="padding: 0 16px 40px">
      <DestinationQuiz />
    </section>

    <section data-aos="fade-up" data-aos-duration="750" style="padding: 0 16px 40px">
      <MediaGallery />
    </section>

    <!-- CTA Section -->
    <section class="cta-section" data-aos="fade-up" data-aos-duration="750">
      <div class="cta-content">
        <h2 data-i18n="ready_for_adventure">Prêt pour l'aventure ?</h2>
        <p data-i18n="choose_epoch">Choisissez votre époque et réservez dès maintenant</p>
        <button class="btn btn-primary btn-large" onclick="toggleChatbot()" data-i18n="ask_ai_advice">
          Demander conseil à notre IA
        </button>
      </div>
    </section>

    <!-- Floating Chatbot Widget injected by chatbot.js -->

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2026 TimeTravel Agency. Tous droits réservés.</p>
        <div class="footer-links">
          <a href="#privacy">Confidentialité</a>
          <a href="#terms">Conditions</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  </div>
</template>
