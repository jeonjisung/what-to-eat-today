<template>
  <div class="food-card">
    <img
        v-if="food.image"
        :src="food.image"
        :alt="food.name"
    />

    <h2>{{ food.name }}</h2>

    <div class="tags">
      <span
          v-for="tag in food.tags"
          :key="tag"
          class="tag"
      >
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Food } from '@/types/recommendation'

defineProps<{
  food: Food
}>()
</script>

<style scoped>
.food-card {
  text-align: center;
  padding: 24px;
}

.food-card img {
  width: 100%;
  max-width: 280px;
  border-radius: 16px;
  margin-bottom: 16px;
}

.tags {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 8px;
}

.tag {
  background: #eee;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
}
</style>
