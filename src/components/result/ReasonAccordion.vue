<template>
  <div class="accordion">
    <button class="toggle" @click="open = !open">
      왜 이 메뉴인가요?
      <span :class="{ open }">▼</span>
    </button>

    <Transition name="accordion">
      <ul v-if="open" class="content">
        <li
            v-for="r in reasons"
            :key="r.text"
        >
          ✔ {{ r.text }}
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { RecommendationReason } from '@/types/recommendation'

defineProps<{
  reasons: RecommendationReason[]
}>()

const open = ref(false)
</script>

<style scoped>
.accordion {
  margin: 16px 0;
}

.toggle {
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  border: none;
  background: #eef6f2;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.toggle span {
  transition: transform 0.3s ease;
}
.toggle span.open {
  transform: rotate(180deg);
}

.content {
  margin-top: 8px;
  padding: 12px;
  background: #f9fdfb;
  border-radius: 12px;
  list-style: none;
}

.content li {
  font-size: 14px;
  margin-bottom: 6px;
}

/* 애니메이션 */
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.25s ease;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
