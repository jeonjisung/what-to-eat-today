<template>
  <Transition name="fade-slide" appear>
    <div class="result-view" v-if="top">
      <h2 class="title">오늘의 추천 🍽️</h2>

      <!-- 메인 카드 -->
      <Transition name="card-pop" appear>
        <FoodCard :food="top.food" />
      </Transition>

      <!-- 추천 이유 -->
      <ReasonAccordion :reasons="top.reasons" />

      <!-- 다른 후보 -->
      <h3 class="sub-title">다른 후보 메뉴</h3>

      <ul class="others">
        <TransitionGroup name="list-fade" tag="div">
          <li
              v-for="item in others"
              :key="item.food.name"
          >
            {{ item.food.name }}
          </li>
        </TransitionGroup>
      </ul>

      <PrimaryButton @click="retry">
        다시 추천받기
      </PrimaryButton>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useRecommendationStore } from '@/stores/recommendationStore'
import FoodCard from '@/components/result/FoodCard.vue'
import PrimaryButton from '@/components/common/PrimaryButton.vue'
import ReasonAccordion from '@/components/result/ReasonAccordion.vue'

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

.title {
  margin-bottom: 12px;
}

.sub-title {
  margin: 24px 0 8px;
}

.others li {
  margin-bottom: 6px;
  font-size: 14px;
}

/* ===== 애니메이션 ===== */

.fade-slide-enter-active {
  transition: all 0.4s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.card-pop-enter-active {
  transition: all 0.4s ease;
}
.card-pop-enter-from {
  opacity: 0;
  transform: translateY(16px) scale(0.95);
}

.list-fade-enter-active {
  transition: all 0.3s ease;
}
.list-fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}
</style>
