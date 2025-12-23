import { defineStore } from 'pinia'
import { foods } from '@/data/foods'
import { questions } from '@/data/questions'
import type {
    Answers,
    RankedFood,
    RecommendationReason
} from '@/types/recommendation'

/**
 * 질문별 가중치
 */
const QUESTION_WEIGHT: Record<keyof Answers, number> = {
    spicy: 2,
    soup: 1.5,
    solo: 1,
    heavy: 1,
    rice: 1,
    greasy: 1,
    fast: 1,
    meat: 1,
    healthy: 1.2,
    adventurous: 1.2
}

/**
 * 현재 시간대 계산
 */
const getCurrentTimeType = (): 'breakfast' | 'lunch' | 'dinner' => {
    const hour = new Date().getHours()
    if (hour < 11) return 'breakfast'
    if (hour < 17) return 'lunch'
    return 'dinner'
}

/**
 * 점수 기반 reason push 헬퍼
 */
const pushReason = (
    reasons: RecommendationReason[],
    text: string,
    score: number,
    minScore = 0.3
) => {
    if (score >= minScore) {
        reasons.push({ text, score })
    }
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
            const key = questions[this.currentStep - 1].key
            delete this.answers[key]
            this.currentStep--
        },

        calculateResults() {
            const currentTime = getCurrentTimeType()

            const ranked: RankedFood[] = foods
                // ⏰ 시간대 필터링
                .filter(food => food.time.includes(currentTime))
                .map(food => {
                    let score = 0
                    const reasons: RecommendationReason[] = []

                    /* 🌶 매운맛 */
                    if (this.answers.spicy !== undefined) {
                        const diff = Math.abs(food.spicy - this.answers.spicy)
                        const s = (2 - diff) * QUESTION_WEIGHT.spicy
                        score += s

                        if (diff === 0) {
                            pushReason(reasons, '매운맛 취향이 완벽하게 맞아요 🌶️', s)
                        } else if (diff === 1) {
                            pushReason(reasons, '맵기 정도가 크게 부담 없어요', s)
                        } else {
                            pushReason(reasons, '자극적이지 않아서 편하게 먹기 좋아요', s)
                        }
                    }

                    /* 🍲 국물 */
                    if (this.answers.soup !== null && this.answers.soup !== undefined) {
                        if (food.soup === this.answers.soup) {
                            const s = 2 * QUESTION_WEIGHT.soup
                            score += s
                            pushReason(
                                reasons,
                                this.answers.soup
                                    ? '따뜻한 국물이 생각나는 타이밍이에요 🍲'
                                    : '국물 없는 메뉴라 깔끔해요',
                                s
                            )
                        }
                    }

                    /* 🍽 혼밥 */
                    if (this.answers.solo !== undefined && food.solo === this.answers.solo) {
                        const s = 1 * QUESTION_WEIGHT.solo
                        score += s
                        pushReason(
                            reasons,
                            this.answers.solo
                                ? '혼자서도 부담 없이 먹기 좋아요'
                                : '여럿이 함께 먹기 좋아요',
                            s
                        )
                    }

                    /* 🧠 익숙함 vs 도전 */
                    if (this.answers.adventurous !== undefined) {
                        const uniqueTags = food.tags.filter(
                            t => !['한식', '국물', '밥'].includes(t)
                        )

                        const adventurousScore = this.answers.adventurous
                            ? uniqueTags.length * 0.4
                            : -uniqueTags.length * 0.2

                        score += adventurousScore

                        if (this.answers.adventurous && uniqueTags.length > 0) {
                            pushReason(
                                reasons,
                                `평소와 다른 ${uniqueTags.join(', ')} 느낌을 즐길 수 있어요`,
                                adventurousScore
                            )
                        }

                        if (!this.answers.adventurous) {
                            pushReason(
                                reasons,
                                '익숙한 메뉴라 실패 확률이 낮아요',
                                Math.abs(adventurousScore)
                            )
                        }
                    }

                    /* 🥗 건강 */
                    if (this.answers.healthy) {
                        const healthyTags = food.tags.filter(t =>
                            ['건강', '가벼움', '저칼로리'].includes(t)
                        )

                        if (healthyTags.length > 0) {
                            const s = 1.5
                            score += s
                            pushReason(
                                reasons,
                                `오늘은 ${healthyTags.join(', ')}한 메뉴가 잘 어울려요`,
                                s
                            )
                        }
                    }

                    /* 🎲 랜덤성 (다양성 확보) */
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
