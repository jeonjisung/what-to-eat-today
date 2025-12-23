<template>
  <div>
    <ProgressBar :current="step" :total="questions.length" />

    <QuestionCard
        :question="questions[step]"
        @select="handleSelect"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { questions } from '@/data/questions'
import { useRecommendationStore } from '@/stores/recommendationStore'
import QuestionCard from '@/components/question/QuestionCard.vue'
import ProgressBar from '@/components/question/ProgressBar.vue'

const store = useRecommendationStore()
const router = useRouter()

const step = computed(() => store.currentStep)

const handleSelect = (value: any) => {
  const question = questions[step.value]
  store.answer(question.key, value)

  if (store.currentStep >= questions.length) {
    store.calculateResult()
    router.push('/result')
  }
}
</script>
