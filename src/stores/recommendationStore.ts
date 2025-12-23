import { defineStore } from 'pinia'
import { foods } from '@/data/foods'
import type { Answers, Food } from '@/types/recommendation'

export const useRecommendationStore = defineStore('recommendation', {
    state: () => ({
        currentStep: 0 as number,
        answers: {} as Answers,
        result: null as Food | null
    }),

    actions: {
        answer<K extends keyof Answers>(key: K, value: Answers[K]) {
            this.answers[key] = value
            this.currentStep++
        },

        calculateResult() {
            let bestFood: Food | null = null
            let bestScore = -Infinity

            foods.forEach(food => {
                let score = 0

                if (this.answers.spicy !== undefined) {
                    score += 2 - Math.abs(food.spicy - this.answers.spicy)
                }

                if (this.answers.soup !== null && this.answers.soup !== undefined) {
                    if (food.soup === this.answers.soup) score += 2
                }

                if (this.answers.solo !== undefined) {
                    if (food.solo === this.answers.solo) score += 1
                }

                if (score > bestScore) {
                    bestScore = score
                    bestFood = food
                }
            })

            this.result = bestFood
        },

        reset() {
            this.currentStep = 0
            this.answers = {}
            this.result = null
        }
    }
})
