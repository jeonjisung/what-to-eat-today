<template>
  <div v-if="result">
    <FoodCard :food="result" />

    <PrimaryButton @click="retry">
      다시 추천받기
    </PrimaryButton>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { useRecommendationStore } from '@/stores/recommendationStore'
import FoodCard from '@/components/result/FoodCard.vue'
import PrimaryButton from '@/components/common/PrimaryButton.vue'

const store = useRecommendationStore()
const router = useRouter()

const result = computed(() => store.result)

const retry = () => {
  store.reset()
  router.push('/')
}
</script>
