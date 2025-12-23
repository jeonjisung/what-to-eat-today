<template>
  <div class="question-view">
    <ProgressBar :current="step" :total="questions.length" />

    <QuestionCard
        :question="questions[step]"
        @select="handleSelect"
    />

    <button
        v-if="step > 0"
        class="back-btn"
        @click="store.goBack"
    >
      ← 이전 질문
    </button>
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
    store.calculateResults()
    router.push('/result')
  }
}
</script>

<style scoped>
.question-view {
  padding: 24px;
}

.back-btn {
  margin-top: 16px;
  width: 100%;
  padding: 12px;
  border-radius: 12px;
  border: none;
  background: #f1f1f1;
  cursor: pointer;
}
</style>
