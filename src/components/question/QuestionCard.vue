<template>
  <section>
    <h2>{{ question.text }}</h2>

    <OptionButton
        v-for="option in question.options"
        :key="option.label"
        :label="option.label"
        @click="select(option.value)"
    />
  </section>
</template>

<script setup lang="ts">
import type { Question } from '@/types/recommendation'
import OptionButton from './OptionButton.vue'

defineProps<{
  question: Question
}>()

const emit = defineEmits<{
  (e: 'select', value: any): void
}>()

const select = (value: any) => {
  emit('select', value)
}
</script>
