<template>
  <div class="result-view" v-if="top">
    <h2>오늘의 추천 🍽️</h2>

    <FoodCard :food="top.food" />

    <ul class="reasons">
      <li v-for="r in top.reasons" :key="r.text">
        ✔ {{ r.text }}
      </li>
    </ul>

    <h3>다른 후보 메뉴</h3>

    <ul class="others">
      <li v-for="item in others" :key="item.food.name">
        {{ item.food.name }}
      </li>
    </ul>

    <PrimaryButton @click="retry">
      다시 추천받기
    </PrimaryButton>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useRecommendationStore } from '@/stores/recommendationStore'
import FoodCard from '@/components/result/FoodCard.vue'
import PrimaryButton from '@/components/common/PrimaryButton.vue'

const store = useRecommendationStore()
const router = useRouter()

const top = computed(() => store.topResult)
const others = computed(() => store.results.slice(1))

const retry = () => {
  store.reset()
  router.push('/')
}
</script>

<style scoped>
.result-view {
  padding: 24px;
  text-align: center;
}

.reasons {
  margin: 16px 0;
  padding: 0;
  list-style: none;
}

.reasons li {
  font-size: 14px;
  margin-bottom: 6px;
}

.others {
  margin: 12px 0 24px;
  padding: 0;
  list-style: none;
  font-size: 14px;
}
</style>
