import type { Food } from '@/types/recommendation'

export const isHeavy = (food: Food) =>
    food.tags.includes('고기') ||
    food.tags.includes('튀김') ||
    food.tags.includes('밥')

export const isFast = (food: Food) =>
    food.tags.includes('간편') ||
    food.tags.includes('야식')

export const isRiceBased = (food: Food) =>
    food.tags.includes('밥')

export const isHealthy = (food: Food) =>
    food.tags.includes('건강') ||
    food.tags.includes('가벼움')
