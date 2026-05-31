<script setup lang="ts">
const isLight = ref(false)
const mobileOpen = ref(false)

function syncThemeState() {
  if (!import.meta.client) return
  isLight.value = document.body.classList.contains('theme-light')
}

onMounted(() => {
  syncThemeState()
})

function onToggleTheme() {
  if (!import.meta.client) return
  const current: 'dark' | 'light' = document.body.classList.contains('theme-light') ? 'light' : 'dark'
  const next: 'dark' | 'light' = current === 'dark' ? 'light' : 'dark'
  localStorage.setItem('tt-theme', next)

  const isLightNext = next === 'light'
  document.documentElement.classList.toggle('theme-light', isLightNext)
  document.body.classList.toggle('theme-light', isLightNext)
  // Legacy styles use `body.light-mode`
  document.body.classList.toggle('light-mode', isLightNext)
  document.documentElement.classList.add('theme-lux')
  document.body.classList.add('theme-lux')

  syncThemeState()
}

function onOpenChat() {
  ;(window as any).toggleChatbot?.()
}

function onLanguageChange(event: Event) {
  const target = event.target as HTMLSelectElement | null
  if (!target) return
  ;(window as any).setLanguage?.(target.value)
}
</script>

<template>
  <nav class="navbar">
    <div class="nav-container">
      <NuxtLink to="/" class="logo">TimeTravel Agency</NuxtLink>
      <button class="icon-btn nav-toggle" type="button" @click="mobileOpen = !mobileOpen" aria-label="Menu">
        ≡
      </button>
      <ul class="nav-menu" :class="{ 'is-open': mobileOpen }">
        <li><a href="/#hero" data-i18n="home">Accueil</a></li>
        <li><a href="/#about" data-i18n="about">À propos</a></li>
        <li><a href="/#destinations" data-i18n="destinations">Destinations</a></li>
        <li>
          <button class="icon-btn" type="button" @click="onOpenChat" data-i18n="ai_assistance">Assistance IA</button>
        </li>
        <li class="nav-controls">
          <button
            class="icon-btn"
            type="button"
            @click="onToggleTheme"
            :aria-pressed="isLight"
            title="Thème"
          >
            ◐
          </button>
          <select class="language-select" @change="onLanguageChange" title="Langue">
            <option value="fr">FR</option>
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select>
        </li>
      </ul>
    </div>
  </nav>
</template>
