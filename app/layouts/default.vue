<script setup lang="ts">
function applyTheme(theme: 'dark' | 'light') {
  const isLight = theme === 'light'
  document.documentElement.classList.toggle('theme-light', isLight)
  document.body.classList.toggle('theme-light', isLight)
  // Legacy styles use `body.light-mode`
  document.body.classList.toggle('light-mode', isLight)
  document.documentElement.classList.add('theme-lux')
  document.body.classList.add('theme-lux')
}

onMounted(() => {
  const stored = (localStorage.getItem('tt-theme') as 'dark' | 'light' | null) ?? 'dark'
  applyTheme(stored)
})
</script>

<template>
  <div class="lux-shell">
    <div class="lux-orbits" aria-hidden="true" />
    <slot />
  </div>
</template>
