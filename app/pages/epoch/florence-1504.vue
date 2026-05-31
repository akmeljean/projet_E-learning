<script setup lang="ts">
useHead({
  title: "Florence 1504 — Renaissance — Âge d’or artistique",
  htmlAttrs: { lang: 'fr' }
})
</script>

<template>
  <div>
    <AppNavbar />
    <section class="epoch-hero lux-epoch-hero" style="--hero-bg: url('/photo/image_0%20(7).png')">
      <div class="hero-overlay"></div>
      <div class="lux-epoch-hero-row">
        <div class="epoch-hero-content">
          <h1>Florence 1504</h1>
          <p class="epoch-period">Renaissance — Âge d’or artistique</p>
          <p class="epoch-tagline">Ateliers, palais et chefs‑d’œuvre au cœur du classicisme</p>
        </div>
        <div class="lux-epoch-hero-media" aria-label="Médias Florence 1504">
          <img src="/media/gallery/MHKzmjX.png" alt="Florence 1504 (1)" loading="lazy" decoding="async" />
          <img src="/media/gallery/8AiFjTV.png" alt="Florence 1504 (2)" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>

    <div class="breadcrumb">
      <NuxtLink to="/">Accueil</NuxtLink>
      <span>→</span>
      <span>Florence 1504</span>
    </div>

    <section id="details" class="epoch-details">
      <div class="container">
        <div class="details-grid">
          <div class="details-main">
            <h2>Une immersion artistique</h2>
            <p>
              Florence en 1504, c’est une ville où l’art est une force politique, économique et culturelle. Vous
              découvrez les ateliers, les commandes publiques et l’effervescence intellectuelle d’une époque fondatrice.
            </p>
            <p>
              Notre parcours privilégie la précision historique : rencontres encadrées, lieux emblématiques, itinéraires
              à pied, et un guide spécialiste pour replacer chaque détail dans son contexte.
            </p>

            <div class="highlights">
              <div class="highlight-item">
                <h3>Ateliers & techniques</h3>
                <p>Matériaux, pigments, perspectives : comprendre la fabrique des chefs‑d’œuvre.</p>
              </div>
              <div class="highlight-item">
                <h3>Architecture & urbanisme</h3>
                <p>Palais, places et églises : la ville comme musée à ciel ouvert.</p>
              </div>
              <div class="highlight-item">
                <h3>Musées vivants</h3>
                <p>Collections, mécénat et circulation des idées à la Renaissance.</p>
              </div>
            </div>
          </div>

          <div class="details-gallery">
            <img
              src="/photo/image_0%20(7).png"
              alt="Florence 1504"
              class="epoch-image"
              loading="lazy"
              decoding="async"
            />
            <div class="gallery-thumbnails">
              <img src="/photo/image_0%20(7).png" alt="Florence" class="thumbnail" loading="lazy" decoding="async" />
              <img src="/photo/image_0%20(3).png" alt="Palais" class="thumbnail" loading="lazy" decoding="async" />
              <img src="/photo/image_0.png" alt="Atelier" class="thumbnail" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="epoch-pois">
      <div class="container">
        <h2>Expériences</h2>
        <div class="pois-grid">
          <div class="poi-card">
            <div class="poi-icon">A</div>
            <h3>Architecture</h3>
            <p>Parcours des façades, places et perspectives, avec lecture de plans.</p>
            <span class="difficulty">Serein</span>
          </div>
          <div class="poi-card">
            <div class="poi-icon">M</div>
            <h3>Musées & collections</h3>
            <p>Sélection d’œuvres et contexte historique, sans surcharge d’informations.</p>
            <span class="difficulty">Serein</span>
          </div>
          <div class="poi-card">
            <div class="poi-icon">O</div>
            <h3>Atelier</h3>
            <p>Démonstration encadrée : pigments, esquisses, techniques de la Renaissance.</p>
            <span class="difficulty">Accessible</span>
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
                <span class="option-price">Essentiel</span>
              </div>
              <div class="option">
                <span class="option-label">Standard</span>
                <span class="option-value">7 jours</span>
                <span class="option-price">Immersion</span>
              </div>
              <div class="option">
                <span class="option-label">Premium</span>
                <span class="option-value">14 jours</span>
                <span class="option-price">Art & mécénat</span>
              </div>
            </div>
          </div>

          <div class="info-card">
            <h3>Recommandations</h3>
            <ul class="warnings">
              <li>Chaussures confortables : Florence se vit à pied.</li>
              <li>Respect des usages sociaux et religieux (guide inclus).</li>
              <li>Itinéraires flexibles selon événements de la ville.</li>
              <li>Option “masterclass” disponible sur demande.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
