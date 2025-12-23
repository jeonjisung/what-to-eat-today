<template>
  <button class="primary-btn">
    <slot />
  </button>
</template>

<script setup lang="ts"></script>

<style scoped>
.primary-btn {
  width: 100%;
  padding: 16px;
  font-size: 16px;
  border-radius: 14px;
  border: none;
  background: #42b883;
  color: white;
  cursor: pointer;
}

.primary-btn:hover {
  background: #369f6b;
}
</style>
