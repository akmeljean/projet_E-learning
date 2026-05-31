<script setup lang="ts">
useHead({
  title: 'Crétacé — -65M années — Derniers jours des dinosaures',
  htmlAttrs: { lang: 'fr' }
})
</script>

<template>
  <div>
    <AppNavbar />
    <section class="epoch-hero lux-epoch-hero" style="--hero-bg: url('/photo/image_0%20(3).png')">
      <div class="hero-overlay"></div>
      <div class="lux-epoch-hero-row">
        <div class="epoch-hero-content">
          <h1>Crétacé</h1>
          <p class="epoch-period">-65 millions d’années</p>
          <p class="epoch-tagline">Nature sauvage, observation et derniers jours des dinosaures</p>
        </div>
        <div class="lux-epoch-hero-media" aria-label="Médias Crétacé">
          <img src="/media/gallery/QYCjs11.png" alt="Crétacé (1)" loading="lazy" decoding="async" />
          <img src="/media/gallery/gycfdpb.png" alt="Crétacé (2)" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>

    <div class="breadcrumb">
      <NuxtLink to="/">Accueil</NuxtLink>
      <span>→</span>
      <span>Crétacé</span>
    </div>

    <section id="details" class="epoch-details">
      <div class="container">
        <div class="details-grid">
          <div class="details-main">
            <h2>Une expédition contrôlée</h2>
            <p>
              Vous partez sur une zone d’observation sécurisée, conçue pour admirer la faune du Crétacé sans interférer
              avec l’écosystème. Ici, l’aventure est réelle, mais la discrétion est absolue.
            </p>
            <p>
              Notre protocole privilégie l’éthique et la sécurité : distances réglementaires, guide naturaliste, matériel
              discret, et itinéraires pensés pour minimiser tout impact.
            </p>

            <div class="highlights">
              <div class="highlight-item">
                <h3>Observation de la faune</h3>
                <p>Repérage à longue portée et points d’observation adaptés.</p>
              </div>
              <div class="highlight-item">
                <h3>Paysages primordiaux</h3>
                <p>Forêts, marécages, littoraux : une Terre méconnaissable.</p>
              </div>
              <div class="highlight-item">
                <h3>Briefing scientifique</h3>
                <p>Contexte géologique et biologique, sans sensationnalisme.</p>
              </div>
            </div>
          </div>

          <div class="details-gallery">
            <img src="/photo/image_0%20(3).png" alt="Crétacé" class="epoch-image" loading="lazy" decoding="async" />
            <div class="gallery-thumbnails">
              <img src="/photo/image_0%20(3).png" alt="Nature" class="thumbnail" loading="lazy" decoding="async" />
              <img src="/photo/image_0%20(7).png" alt="Ciel" class="thumbnail" loading="lazy" decoding="async" />
              <img src="/photo/image_0%20(3).png" alt="Terrain" class="thumbnail" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="epoch-pois">
      <div class="container">
        <h2>Activités</h2>
        <div class="pois-grid">
          <div class="poi-card">
            <div class="poi-icon">O</div>
            <h3>Observatoire mobile</h3>
            <p>Suivi à distance, jumelles stabilisées et protocole silencieux.</p>
            <span class="difficulty">Modéré</span>
          </div>
          <div class="poi-card">
            <div class="poi-icon">T</div>
            <h3>Trace & terrain</h3>
            <p>Lecture d’empreintes et compréhension des trajectoires.</p>
            <span class="difficulty">Modéré</span>
          </div>
          <div class="poi-card">
            <div class="poi-icon">N</div>
            <h3>Biomes</h3>
            <p>Exploration encadrée de plusieurs biomes en une semaine.</p>
            <span class="difficulty">Intense</span>
          </div>
        </div>
      </div>
    </section>

    <section class="epoch-info">
      <div class="container">
        <div class="info-grid">
          <div class="info-card">
            <h3>Durée recommandée</h3>
            <div class="info-options">
              <div class="option">
                <span class="option-label">Express</span>
                <span class="option-value">3 jours</span>
                <span class="option-price">Découverte</span>
              </div>
              <div class="option">
                <span class="option-label">Standard</span>
                <span class="option-value">7 jours</span>
                <span class="option-price">Observation</span>
              </div>
              <div class="option">
                <span class="option-label">Premium</span>
                <span class="option-value">14 jours</span>
                <span class="option-price">Multi-biomes</span>
              </div>
            </div>
          </div>

          <div class="info-card">
            <h3>Recommandations</h3>
            <ul class="warnings">
              <li>Respect strict des distances d’observation.</li>
              <li>Équipement fourni (protection, capteurs, communication).</li>
              <li>Interdiction de collecte (plantes, roches, “souvenirs”).</li>
              <li>Option “nuit” disponible selon météo et visibilité.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
