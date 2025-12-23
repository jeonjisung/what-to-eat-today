<template>
  <div class="result-view" v-if="top">
    <h2 class="title">오늘의 추천 🍽️</h2>

    <!-- 메인 추천 -->
    <FoodCard :food="top.food" />

    <!-- 추천 이유 -->
    <ul class="reasons">
      <li v-for="r in top.reasons" :key="r.text">
        ✔ {{ r.text }}
      </li>
    </ul>

    <!-- 다른 후보 -->
    <h3 class="subtitle">다른 후보 메뉴</h3>

    <ul class="others">
      <li v-for="item in others" :key="item.food.name">
        {{ item.food.name }}
      </li>
    </ul>

    <!-- 액션 버튼 -->
    <div class="actions">
      <PrimaryButton @click="share">
        결과 공유하기
      </PrimaryButton>

      <PrimaryButton variant="secondary" @click="retry">
        다시 추천받기
      </PrimaryButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useRecommendationStore } from '@/stores/recommendationStore'
import { foods } from '@/data/foods'
import FoodCard from '@/components/result/FoodCard.vue'
import PrimaryButton from '@/components/common/PrimaryButton.vue'

const store = useRecommendationStore()
const router = useRouter()

/** 상위 결과 */
const top = computed(() => store.topResult)

/** 나머지 후보 */
const others = computed(() => store.results.slice(1))

/** 다시 시작 */
const retry = () => {
  store.reset()
  router.push('/')
}

/** 공유 */
const share = async () => {
  const url = window.location.href

  if (navigator.share) {
    await navigator.share({
      title: '오늘 뭐 먹지?',
      url
    })
  } else {
    await navigator.clipboard.writeText(url)
    alert('링크가 복사되었습니다')
  }
}

/** URL → 결과 복원 */
onMounted(() => {
  const name = new URLSearchParams(location.search).get('food')
  if (!name) return

  const food = foods.find(f => f.name === name)
  if (!food) return

  // 결과가 없을 때만 복원
  if (!store.topResult) {
    store.restoreFromFood(food)
  }
})

/** 결과 → URL 반영 */
watch(
    () => store.topResult,
    top => {
      if (!top) return
      const url = new URL(window.location.href)
      url.searchParams.set('food', top.food.name)
      history.replaceState(null, '', url.toString())
    },
    { immediate: true }
)
</script>

<style scoped>
.result-view {
  padding: 24px;
  text-align: center;
}

.title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 12px;
}

.subtitle {
  font-size: 16px;
  font-weight: 600;
  margin-top: 20px;
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
  color: #555;
}

.actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
