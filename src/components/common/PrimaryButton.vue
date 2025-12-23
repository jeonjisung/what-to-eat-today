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
  background: #3cb371; /* MediumSeaGreen */
  color: white;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
}

.primary-btn:hover {
  background: #2e9f5f;
}

.primary-btn:active {
  transform: scale(0.97);
}
</style>
