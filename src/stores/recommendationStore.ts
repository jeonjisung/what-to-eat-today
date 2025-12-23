import { defineStore } from 'pinia'
import { foods } from '@/data/foods'
import { questions } from '@/data/questions'
import type {
    Answers,
    RankedFood,
    RecommendationReason,
    TimeSlot
} from '@/types/recommendation'

/**
 * 질문별 가중치
 * → "중요한 질문일수록 결과에 더 크게 반영"
 */
const QUESTION_WEIGHT: Record<keyof Answers, number> = {
    spicy: 2.5,
    soup: 2,
    solo: 1.5,
    heavy: 1.5,
    rice: 1.2,
    greasy: 1.2,
    fast: 1,
    meat: 1.5,
    healthy: 2,
    adventurous: 1.3
}

/**
 * 현재 시간대 계산
 */
const getCurrentTimeSlot = (): TimeSlot => {
    const hour = new Date().getHours()
    if (hour < 10) return 'breakfast'
    if (hour < 15) return 'lunch'
    if (hour < 21) return 'dinner'
    return 'late'
}

/**
 * spicy 점수 계산 (거리 기반)
 */
const calcSpicyScore = (foodSpicy: number, answer: number, weight: number) => {
    const diff = Math.abs(foodSpicy - answer)
    return Math.max(0, (2 - diff)) * weight
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
        answer<K extends keyof Answers>(key: K, value: Answers[K]) {
            this.answers[key] = value
            this.currentStep++
        },

        goBack() {
            if (this.currentStep === 0) return
            const prevKey = questions[this.currentStep - 1].key
            delete this.answers[prevKey]
            this.currentStep--
        },

        calculateResults() {
            const currentTime = getCurrentTimeSlot()

            const ranked: RankedFood[] = foods
                // ⏰ 시간대 필터링
                .filter(food => food.time.includes(currentTime))
                .map(food => {
                    let score = 0
                    const reasons: RecommendationReason[] = []

                    // -------------------------
                    // 질문별 점수 계산
                    // -------------------------
                    for (const [key, answer] of Object.entries(this.answers)) {
                        if (answer === undefined || answer === null) continue

                        const weight = QUESTION_WEIGHT[key as keyof Answers]

                        // 🌶 매운맛 (숫자형)
                        if (key === 'spicy') {
                            const s = calcSpicyScore(food.spicy, answer as number, weight)
                            score += s
                            if (s > 0) {
                                reasons.push({
                                    text: '매운맛 취향이 잘 맞아요',
                                    score: s
                                })
                            }
                            continue
                        }

                        // 🧠 도전 성향 (태그 개수 기반)
                        if (key === 'adventurous') {
                            const tagScore = food.tags.length * 0.3 * weight
                            const s = (answer ? tagScore : -tagScore)
                            score += s
                            if (s > 0) {
                                reasons.push({
                                    text: '새로운 메뉴에 도전하기 좋아요',
                                    score: s
                                })
                            }
                            continue
                        }

                        // ✅ boolean 질문들
                        const foodValue = (food as any)[key]
                        if (typeof foodValue === 'boolean') {
                            const s = foodValue === answer ? weight : -weight * 0.6
                            score += s

                            if (s > 0) {
                                reasons.push({
                                    text: getReasonText(key as keyof Answers),
                                    score: s
                                })
                            }
                        }
                    }

                    // 🏷 태그 보조 점수 (과도하지 않게)
                    if (this.answers.healthy && food.tags.includes('건강')) {
                        score += 1
                        reasons.push({
                            text: '건강한 메뉴예요',
                            score: 1
                        })
                    }

                    // 🎲 랜덤성 (다양성 확보용)
                    score += Math.random() * 0.8

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

/**
 * 질문 key → 이유 문구 매핑
 */
function getReasonText(key: keyof Answers): string {
    switch (key) {
        case 'soup':
            return '국물 있는 음식을 원하셨어요'
        case 'solo':
            return '혼자 먹기 좋은 메뉴예요'
        case 'heavy':
            return '든든하게 먹기 좋아요'
        case 'rice':
            return '밥과 잘 어울려요'
        case 'greasy':
            return '기름진 음식 취향이에요'
        case 'fast':
            return '빠르게 먹기 좋아요'
        case 'meat':
            return '고기 메뉴를 선호하셨어요'
        case 'healthy':
            return '오늘은 건강한 선택이에요'
        default:
            return '취향에 잘 맞아요'
    }
}
