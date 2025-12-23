import { defineStore } from 'pinia'
import { foods } from '@/data/foods'
import { questions } from '@/data/questions'
import type {
    Answers,
    Food,
    RankedFood,
    RecommendationReason
} from '@/types/recommendation'

export const useRecommendationStore = defineStore('recommendation', {
    state: () => ({
        currentStep: 0,
        answers: {} as Answers,
        results: [] as RankedFood[]
    }),

    getters: {
        topResult: state => state.results[0] || null
    },

    actions: {
        answer<K extends keyof Answers>(key: K, value: Answers[K]) {
            this.answers[key] = value
            this.currentStep++
        },

        goBack() {
            if (this.currentStep === 0) return
            const key = questions[this.currentStep - 1].key
            delete this.answers[key]
            this.currentStep--
        },

        calculateResults() {
            const ranked: RankedFood[] = foods.map(food => {
                let score = 0
                const reasons: RecommendationReason[] = []

                // 매운맛
                if (this.answers.spicy !== undefined) {
                    const diff = Math.abs(food.spicy - this.answers.spicy)
                    const s = 2 - diff
                    score += s
                    reasons.push({
                        text: '매운맛 취향이 잘 맞아요',
                        score: s
                    })
                }

                // 국물
                if (this.answers.soup !== null && this.answers.soup !== undefined) {
                    if (food.soup === this.answers.soup) {
                        score += 2
                        reasons.push({
                            text: '국물 있는 음식을 원했어요',
                            score: 2
                        })
                    }
                }

                // 혼밥
                if (this.answers.solo !== undefined) {
                    if (food.solo === this.answers.solo) {
                        score += 1
                        reasons.push({
                            text: '혼자 먹기 좋아요',
                            score: 1
                        })
                    }
                }

                // 랜덤성 (항상 같은 결과 방지)
                const randomBonus = Math.random() * 0.5
                score += randomBonus

                return { food, score, reasons }
            })

            this.results = ranked
                .sort((a, b) => b.score - a.score)
                .slice(0, 3)
        },

        reset() {
            this.currentStep = 0
            this.answers = {}
            this.results = []
        }
    }
})
