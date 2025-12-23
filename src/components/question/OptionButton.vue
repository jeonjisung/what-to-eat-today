<template>
  <button class="option-btn">
    {{ label }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<style scoped>
.option-btn {
  width: 100%;
  padding: 16px;
  margin-bottom: 12px;
  font-size: 16px;
  border-radius: 12px;
  border: none;
  background: #f4f4f4;
  cursor: pointer;
}

.option-btn:hover {
  background: #e0e0e0;
}
</style>
