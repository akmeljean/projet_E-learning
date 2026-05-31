<script setup lang="ts">
type DestinationId = 'paris-1889' | 'cretaceous' | 'florence-1504'

type Option = {
  id: string
  label: string
  score: Record<DestinationId, number>
}

type Question = {
  id: string
  title: string
  options: Option[]
}

const questions: Question[] = [
  {
    id: 'q1',
    title: "Quel type d'expérience recherchez-vous ?",
    options: [
      {
        id: 'culture',
        label: 'Culturelle et artistique',
        score: { 'paris-1889': 3, 'cretaceous': 1, 'florence-1504': 3 }
      },
      {
        id: 'adventure',
        label: 'Aventure et nature',
        score: { 'paris-1889': 1, 'cretaceous': 3, 'florence-1504': 1 }
      },
      {
        id: 'luxury',
        label: 'Élégance et raffinement',
        score: { 'paris-1889': 3, 'cretaceous': 1, 'florence-1504': 2 }
      }
    ]
  },
  {
    id: 'q2',
    title: 'Votre période préférée ?',
    options: [
      {
        id: 'modern',
        label: 'Histoire moderne (XIXe-XXe siècle)',
        score: { 'paris-1889': 3, 'cretaceous': 1, 'florence-1504': 1 }
      },
      {
        id: 'ancient',
        label: 'Temps anciens et origines',
        score: { 'paris-1889': 1, 'cretaceous': 3, 'florence-1504': 1 }
      },
      {
        id: 'renaissance',
        label: 'Renaissance et classicisme',
        score: { 'paris-1889': 1, 'cretaceous': 1, 'florence-1504': 3 }
      }
    ]
  },
  {
    id: 'q3',
    title: 'Vous préférez :',
    options: [
      {
        id: 'city',
        label: "L'effervescence urbaine",
        score: { 'paris-1889': 3, 'cretaceous': 1, 'florence-1504': 2 }
      },
      {
        id: 'wild',
        label: 'La nature sauvage',
        score: { 'paris-1889': 1, 'cretaceous': 3, 'florence-1504': 1 }
      },
      {
        id: 'art',
        label: "L'art et l'architecture",
        score: { 'paris-1889': 2, 'cretaceous': 1, 'florence-1504': 3 }
      }
    ]
  },
  {
    id: 'q4',
    title: 'Votre activité idéale :',
    options: [
      {
        id: 'monuments',
        label: 'Visiter des monuments',
        score: { 'paris-1889': 3, 'cretaceous': 1, 'florence-1504': 3 }
      },
      {
        id: 'fauna',
        label: 'Observer la faune',
        score: { 'paris-1889': 1, 'cretaceous': 3, 'florence-1504': 1 }
      },
      {
        id: 'museums',
        label: 'Explorer des musées',
        score: { 'paris-1889': 3, 'cretaceous': 1, 'florence-1504': 3 }
      }
    ]
  }
]

const answers = reactive<Record<string, string>>({})

const currentIndex = ref(0)
const currentQuestion = computed(() => questions[currentIndex.value]!)

const isComplete = computed(() => questions.every((q) => Boolean(answers[q.id])))

const scores = computed(() => {
  const base: Record<DestinationId, number> = { 'paris-1889': 0, 'cretaceous': 0, 'florence-1504': 0 }
  for (const q of questions) {
    const selectedId = answers[q.id]
    const selected = q.options.find((o) => o.id === selectedId)
    if (!selected) continue
    base['paris-1889'] += selected.score['paris-1889']
    base.cretaceous += selected.score.cretaceous
    base['florence-1504'] += selected.score['florence-1504']
  }
  return base
})

const recommendation = computed(() => {
  const sorted = (Object.entries(scores.value) as Array<[DestinationId, number]>).sort((a, b) => b[1] - a[1])
  const best = sorted[0]?.[0] ?? 'paris-1889'
  const meta: Record<DestinationId, { title: string; href: string; description: string }> = {
    'paris-1889': {
      title: 'Paris 1889 — Exposition Universelle',
      href: '/epoch/paris-1889',
      description:
        "Vous aimez l'effervescence urbaine, les monuments et l'élégance : la Belle Époque vous ira comme un gant."
    },
    'cretaceous': {
      title: 'Crétacé — Derniers jours des dinosaures',
      href: '/epoch/cretaceous',
      description:
        "Vous cherchez la nature brute et l'aventure : le Crétacé offre une expérience rare, intense et immersive."
    },
    'florence-1504': {
      title: "Florence 1504 — Renaissance",
      href: '/epoch/florence-1504',
      description:
        "Vous êtes attiré(e) par l'art, l'architecture et le classicisme : Florence au cœur de la Renaissance est votre destination idéale."
    }
  }
  return { id: best, ...meta[best] }
})

function goNext() {
  if (currentIndex.value < questions.length - 1) currentIndex.value += 1
}

function goPrev() {
  if (currentIndex.value > 0) currentIndex.value -= 1
}

function onAnswerSelected() {
  if (isComplete.value) return
  // Auto-advance for a smoother, one-question-at-a-time flow
  setTimeout(() => {
    if (currentIndex.value < questions.length - 1) currentIndex.value += 1
  }, 220)
}

function resetQuiz() {
  for (const q of questions) delete answers[q.id]
  currentIndex.value = 0
}
</script>

<template>
  <section class="lux-quiz" aria-labelledby="quiz-title">
    <h2 id="quiz-title">Quiz de recommandation</h2>
    <p>Répondez à 4 questions et obtenez la destination la plus adaptée à vos préférences.</p>

    <div
      v-if="!isComplete"
      class="lux-q"
      :key="currentQuestion.id"
      role="group"
      :aria-label="`Question ${currentIndex + 1} sur ${questions.length}`"
    >
      <div style="display:flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom:10px">
        <div class="lux-q-title" style="margin:0">{{ currentQuestion.title }}</div>
        <div style="color: var(--lux-muted); font-size: 0.9rem">{{ currentIndex + 1 }}/{{ questions.length }}</div>
      </div>

      <div class="lux-options">
        <label v-for="opt in currentQuestion.options" :key="opt.id" class="lux-option">
          <input
            v-model="answers[currentQuestion.id]"
            type="radio"
            :name="currentQuestion.id"
            :value="opt.id"
            @change="onAnswerSelected"
          />
          <span>{{ opt.label }}</span>
        </label>
      </div>

      <div style="display:flex; justify-content:space-between; gap:10px; margin-top:14px; flex-wrap:wrap">
        <button class="btn btn-secondary" type="button" :disabled="currentIndex === 0" @click="goPrev">
          Retour
        </button>
        <button
          class="btn btn-primary"
          type="button"
          :disabled="!answers[currentQuestion.id]"
          @click="goNext"
        >
          Suivant
        </button>
      </div>
    </div>

    <div v-else class="lux-result" role="status" aria-live="polite">
      <div style="display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap">
        <div>
          <div style="font-weight: 700; letter-spacing: 0.03em">Destination recommandée : {{ recommendation.title }}</div>
          <div style="margin-top: 6px; color: var(--lux-muted)">{{ recommendation.description }}</div>
        </div>
        <div style="display:flex; gap:10px">
          <NuxtLink class="btn btn-primary" :to="recommendation.href">Découvrir</NuxtLink>
          <button class="btn btn-secondary" type="button" @click="resetQuiz">Recommencer</button>
        </div>
      </div>
    </div>
  </section>
</template>
