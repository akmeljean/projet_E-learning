<script setup lang="ts">
type MediaItem =
  | { id: string; type: 'image'; src: string; alt: string }
  | { id: string; type: 'video'; src: string; poster?: string; alt: string }

const items: MediaItem[] = [
  { id: 'teaser', type: 'video', src: '/media/teaser.mp4', poster: '/photo/image_0%20(7).png', alt: 'Teaser' },
  { id: 'img-paris', type: 'image', src: '/photo/image_0.png', alt: 'Paris 1889' },
  { id: 'img-cret', type: 'image', src: '/photo/image_0%20(3).png', alt: 'Crétacé' },
  { id: 'img-flor', type: 'image', src: '/photo/image_0%20(7).png', alt: 'Florence 1504' },
  { id: 'paris-a', type: 'image', src: '/media/gallery/dtFbpP8.png', alt: 'Paris 1889 (A)' },
  { id: 'paris-b', type: 'image', src: '/media/gallery/23vQUGW.png', alt: 'Paris 1889 (B)' },
  { id: 'flor-a', type: 'image', src: '/media/gallery/MHKzmjX.png', alt: 'Florence 1504 (A)' },
  { id: 'flor-b', type: 'image', src: '/media/gallery/8AiFjTV.png', alt: 'Florence 1504 (B)' },
  { id: 'cret-a', type: 'image', src: '/media/gallery/QYCjs11.png', alt: 'Crétacé (A)' },
  { id: 'cret-b', type: 'image', src: '/media/gallery/gycfdpb.png', alt: 'Crétacé (B)' }
]

const selectedId = ref(items[0]!.id)

const selected = computed(() => items.find((i) => i.id === selectedId.value) ?? items[0]!)
</script>

<template>
  <section class="lux-gallery" aria-labelledby="gallery-title">
    <header class="lux-gallery-header">
      <h2 id="gallery-title">Galerie</h2>
      <p>Explorez les médias du site (images + vidéo teaser) et sélectionnez celui à afficher.</p>
    </header>

    <div class="lux-gallery-grid">
      <div class="lux-gallery-main" role="region" aria-label="Média principal">
        <video
          v-if="selected.type === 'video'"
          class="lux-gallery-media"
          controls
          playsinline
          preload="metadata"
          :poster="selected.poster"
        >
          <source :src="selected.src" type="video/mp4" />
        </video>
        <img
          v-else
          class="lux-gallery-media"
          :src="selected.src"
          :alt="selected.alt"
          loading="lazy"
          decoding="async"
        />
      </div>

      <aside class="lux-gallery-thumbs" aria-label="Sélecteur de médias">
        <button
          v-for="item in items"
          :key="item.id"
          type="button"
          class="lux-thumb"
          :class="{ 'is-active': item.id === selectedId }"
          @click="selectedId = item.id"
          :aria-label="`Afficher: ${item.alt}`"
        >
          <div class="lux-thumb-inner">
            <img
              v-if="item.type === 'image'"
              :src="item.src"
              :alt="item.alt"
              loading="lazy"
              decoding="async"
            />
            <div v-else class="lux-thumb-video">
              <img :src="item.poster || '/photo/image_0%20(7).png'" :alt="item.alt" loading="lazy" decoding="async" />
              <span class="lux-thumb-badge">VIDÉO</span>
            </div>
          </div>
        </button>
      </aside>
    </div>
  </section>
</template>
