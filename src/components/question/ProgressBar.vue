<template>
  <div class="progress-container">
    <div
        class="progress-bar"
        :style="{ width: percent + '%' }"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  current: number
  total: number
}>()

const percent = computed(() =>
    Math.round((props.current / props.total) * 100)
)
</script>

<style scoped>
.progress-container {
  width: 100%;
  height: 6px;
  background: #eee;
  border-radius: 999px;
  overflow: hidden;
  margin-bottom: 16px;
}

.progress-bar {
  height: 100%;
  background: #42b883;
  transition: width 0.3s ease;
}
</style>
