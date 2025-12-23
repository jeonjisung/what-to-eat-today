import { defineStore } from 'pinia'
import { foods } from '@/data/foods'
import { questions } from '@/data/questions'
import type {
    Answers,
    Food,
    RankedFood,
    RecommendationReason
} from '@/types/recommendation'

/** 현재 시간대 */
function getTimeSlot() {
    const h = new Date().getHours()
    if (h >= 6 && h < 11) return 'morning'
    if (h >= 11 && h < 17) return 'lunch'
    if (h >= 17 && h < 22) return 'dinner'
    return 'late'
}

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
        /** 질문 답변 */
        answer<K extends keyof Answers>(key: K, value: Answers[K]) {
            this.answers[key] = value
            this.currentStep++
        },

        /** 질문 뒤로가기 */
        goBack() {
            if (this.currentStep === 0) return
            const key = questions[this.currentStep - 1].key
            delete this.answers[key]
            this.currentStep--
        },

        /** 추천 결과 계산 */
        calculateResults() {
            const timeSlot = getTimeSlot()

            const ranked: RankedFood[] = foods.map(food => {
                let score = 0
                const reasons: RecommendationReason[] = []

                // 🌶 매운맛
                if (this.answers.spicy !== undefined) {
                    const diff = Math.abs(food.spicy - this.answers.spicy)
                    const s = Math.max(0, 2 - diff)
                    if (s > 0) {
                        score += s
                        reasons.push({
                            text: '매운맛 취향이 잘 맞아요',
                            score: s
                        })
                    }
                }

                // 🍲 국물
                if (this.answers.soup !== null && this.answers.soup !== undefined) {
                    if (food.soup === this.answers.soup) {
                        score += 2
                        reasons.push({
                            text: '국물 있는 음식을 원했어요',
                            score: 2
                        })
                    }
                }

                // 👤 혼밥
                if (this.answers.solo !== undefined) {
                    if (food.solo === this.answers.solo) {
                        score += 1
                        reasons.push({
                            text: '혼자 먹기 좋아요',
                            score: 1
                        })
                    }
                }

                // 🕒 시간대 보정
                if (timeSlot === 'morning' && food.tags.includes('가벼움')) {
                    score += 0.8
                    reasons.push({
                        text: '아침에 부담 없는 메뉴예요',
                        score: 0.8
                    })
                }

                if (timeSlot === 'late' && food.tags.includes('야식')) {
                    score += 1
                    reasons.push({
                        text: '야식으로 잘 어울려요',
                        score: 1
                    })
                }

                // 🎲 랜덤 보너스 (품질 보호)
                const randomBonus = Math.random() * 0.4
                score += randomBonus

                return {
                    food,
                    score,
                    reasons: reasons
                        .sort((a, b) => b.score - a.score)
                        .slice(0, 3)
                }
            })

            this.results = ranked
                .sort((a, b) => b.score - a.score)
                .slice(0, 3)
        },

        /** URL 공유 결과 복원 */
        restoreFromFood(food: Food) {
            this.results = [
                {
                    food,
                    score: 0,
                    reasons: [{ text: '공유된 추천 메뉴입니다', score: 0 }]
                }
            ]
        },

        /** 초기화 */
        reset() {
            this.currentStep = 0
            this.answers = {}
            this.results = []
        }
    }
})
