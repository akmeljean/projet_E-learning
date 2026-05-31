export default defineNuxtPlugin(() => {
  ;(window as any).toggleChatbot = function toggleChatbot() {
    const fab = document.getElementById('tt-chatbot-fab') as HTMLButtonElement | null
    fab?.click()
  }
})

