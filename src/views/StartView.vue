<template>
  <div class="start-view">
    <h1>오늘 뭐 먹지?</h1>
    <p>간단한 질문으로 메뉴를 추천해드려요</p>

    <PrimaryButton @click="start">
      시작하기
    </PrimaryButton>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import PrimaryButton from '@/components/common/PrimaryButton.vue'
import { useRecommendationStore } from '@/stores/recommendationStore'

const router = useRouter()
const store = useRecommendationStore()

const start = () => {
  store.reset()
  router.push('/question')
}
</script>

<style scoped>
.start-view {
  min-height: 100vh;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  text-align: center;
}
</style>
