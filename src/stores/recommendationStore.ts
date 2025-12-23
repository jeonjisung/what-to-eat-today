import { defineStore } from 'pinia'
import { foods } from '@/data/foods'
import { questions } from '@/data/questions'
import type {
    Answers,
    RankedFood,
    RecommendationReason,
    Food
} from '@/types/recommendation'

/* ---------- 질문 가중치 (자동 확장 가능) ---------- */

const QUESTION_WEIGHT: Partial<Record<keyof Answers, number>> = {
    spicy: 2,
    soup: 1.5,
    solo: 1,
    heavy: 1.5,
    rice: 1.3,
    greasy: 1,
    fast: 1,
    meat: 1.2,
    healthy: 1.5,
    adventurous: 1
}

/* ---------- 시간대 ---------- */

const getCurrentTime = () => {
    const h = new Date().getHours()
    if (h < 11) return 'breakfast'
    if (h < 17) return 'lunch'
    if (h < 22) return 'dinner'
    return 'late'
}

/* ---------- 파생 특성 레이어 ---------- */

const isHeavy = (food: Food) =>
    food.tags.includes('밥') || food.tags.includes('고기')

const isFast = (food: Food) =>
    food.tags.includes('간편') || food.tags.includes('면')

const isRiceBased = (food: Food) =>
    food.tags.includes('밥')

/* ---------- Store ---------- */

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
        answer(key: keyof Answers, value: any) {
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
            const time = getCurrentTime()

            const ranked = foods
                .filter(food => food.time.includes(time))
                .map(food => {
                    let score = 0
                    const reasons: RecommendationReason[] = []

                    /* ---------- 질문 기반 점수 ---------- */
                    Object.entries(this.answers).forEach(([key, value]) => {
                        const weight = QUESTION_WEIGHT[key as keyof Answers] ?? 1
                        let s = 0

                        switch (key) {
                            case 'spicy':
                                s = (2 - Math.abs(food.spicy - value)) * weight
                                break
                            case 'rice':
                                s = value && isRiceBased(food) ? weight : 0
                                break
                            case 'fast':
                                s = value && isFast(food) ? weight : 0
                                break
                            case 'heavy':
                                s = value === isHeavy(food) ? weight : 0
                                break
                            case 'meat':
                                s = value && food.tags.includes('고기') ? weight : 0
                                break
                            case 'healthy':
                                s = value && food.tags.includes('건강') ? weight : 0
                                break
                        }

                        if (s > 0) {
                            score += s
                            reasons.push({
                                text: `${key} 취향과 잘 맞아요`,
                                score: s,
                                source: key as keyof Answers
                            })
                        }
                    })

                    /* ---------- 다양성 랜덤 ---------- */
                    score += Math.random() * 0.5

                    /* ---------- Top 3 이유만 ---------- */
                    const topReasons = reasons
                        .sort((a, b) => b.score - a.score)
                        .slice(0, 3)

                    const confidence = Math.min(
                        95,
                        Math.round((score / 10) * 100)
                    )

                    return {
                        food,
                        score,
                        confidence,
                        reasons: topReasons
                    }
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
