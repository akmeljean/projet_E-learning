<script setup lang="ts">
useHead({
  title: 'Paris 1889 — Exposition Universelle & Belle Époque',
  htmlAttrs: { lang: 'fr' }
})
</script>

<template>
  <div>
    <AppNavbar />
    <section class="epoch-hero lux-epoch-hero" style="--hero-bg: url('/photo/image_0.png')">
      <div class="hero-overlay"></div>
      <div class="lux-epoch-hero-row">
        <div class="epoch-hero-content">
          <h1>Paris 1889</h1>
          <p class="epoch-period">Exposition Universelle & Belle Époque</p>
          <p class="epoch-tagline">Arts, cafés, innovation et élégance au pied de la Tour Eiffel</p>
        </div>
        <div class="lux-epoch-hero-media" aria-label="Médias Paris 1889">
          <img src="/media/gallery/dtFbpP8.png" alt="Paris 1889 (1)" loading="lazy" decoding="async" />
          <img src="/media/gallery/23vQUGW.png" alt="Paris 1889 (2)" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>

    <div class="breadcrumb">
      <NuxtLink to="/">Accueil</NuxtLink>
      <span>→</span>
      <span>Paris 1889</span>
    </div>

    <section id="details" class="epoch-details">
      <div class="container">
        <div class="details-grid">
          <div class="details-main">
            <h2>Vivre l’Exposition Universelle</h2>
            <p>
              Paris s’illumine, les boulevards vibrent, les ateliers débordent de créativité. Vous arrivez en 1889, au
              moment où la ville célèbre la modernité, les sciences, les arts et l’audace architecturale.
            </p>
            <p>
              Votre expérience est pensée pour une immersion raffinée : adresses emblématiques, ambiances de cabaret,
              expositions, promenades sur les quais et soirées feutrées.
            </p>

            <div class="highlights">
              <div class="highlight-item">
                <h3>Tour Eiffel (inauguration)</h3>
                <p>Montez dans la nouvelle icône de Paris et admirez la capitale comme au premier jour.</p>
              </div>
              <div class="highlight-item">
                <h3>Grandes expositions</h3>
                <p>Innovations, arts décoratifs et démonstrations techniques : la modernité en direct.</p>
              </div>
              <div class="highlight-item">
                <h3>Vie parisienne</h3>
                <p>Cafés, bals, affiches, mode : la Belle Époque dans ce qu’elle a de plus chic.</p>
              </div>
            </div>
          </div>

          <div class="details-gallery">
            <img src="/photo/image_0.png" alt="Paris 1889" class="epoch-image" loading="lazy" decoding="async" />
            <div class="gallery-thumbnails">
              <img src="/photo/image_0.png" alt="Paris" class="thumbnail" loading="lazy" decoding="async" />
              <img src="/photo/image_0%20(7).png" alt="Soirée" class="thumbnail" loading="lazy" decoding="async" />
              <img src="/photo/image_0%20(3).png" alt="Expo" class="thumbnail" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="epoch-pois">
      <div class="container">
        <h2>Incontournables</h2>
        <div class="pois-grid">
          <div class="poi-card">
            <div class="poi-icon">E</div>
            <h3>Exposition Universelle</h3>
            <p>Parcours guidé des pavillons, arts industriels et démonstrations techniques.</p>
            <span class="difficulty">Accessible</span>
          </div>
          <div class="poi-card">
            <div class="poi-icon">M</div>
            <h3>Musées et salons</h3>
            <p>Peinture, sculpture, affiches : une journée sur mesure autour des arts.</p>
            <span class="difficulty">Serein</span>
          </div>
          <div class="poi-card">
            <div class="poi-icon">N</div>
            <h3>Soirée Belle Époque</h3>
            <p>Cabaret, musique et gastronomie dans une ambiance élégante.</p>
            <span class="difficulty">Chic</span>
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
                <span class="option-price">Immersion</span>
              </div>
              <div class="option">
                <span class="option-label">Premium</span>
                <span class="option-value">14 jours</span>
                <span class="option-price">Art & adresses</span>
              </div>
            </div>
          </div>

          <div class="info-card">
            <h3>Style de voyage</h3>
            <div class="experience-types">
              <label class="experience-option">
                <input type="radio" name="experience" value="culture" checked />
                <span>Culture & patrimoine</span>
                <p>Monuments, salons, expositions, balades iconiques.</p>
              </label>
              <label class="experience-option">
                <input type="radio" name="experience" value="luxury" />
                <span>Élégance</span>
                <p>Hébergements premium, gastronomie, soirées feutrées.</p>
              </label>
            </div>
          </div>

          <div class="info-card">
            <h3>Recommandations</h3>
            <ul class="warnings">
              <li>Tenue soignée conseillée pour certaines soirées.</li>
              <li>Itinéraires optimisés pour éviter la foule des pavillons.</li>
              <li>Guide historique + étiquette sociale inclus.</li>
              <li>Photos autorisées selon zones, discrétion recommandée.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
