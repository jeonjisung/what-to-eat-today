export type TimeSlot = 'breakfast' | 'lunch' | 'dinner' | 'late'

/* ---------- 질문 ---------- */

export interface QuestionOption<T = any> {
    label: string
    value: T
}

export interface Question<T = any> {
    id: number
    key: keyof Answers
    text: string
    options: QuestionOption<T>[]
}

/* ---------- 음식 ---------- */

export type FoodTag =
    | '밥'
    | '면'
    | '국물'
    | '고기'
    | '튀김'
    | '건강'
    | '가벼움'
    | '간편'
    | '야식'
    | '매운'
    | '한식'
    | '일식'
    | '중식'
    | '양식'
    | '치즈'

export interface Food {
    name: string
    spicy: number          // 0~2
    soup: boolean
    solo: boolean
    tags: FoodTag[]
    time: TimeSlot[]
    image: string
}

/* ---------- 추천 결과 ---------- */

export interface RecommendationReason {
    text: string
    score: number
    source: keyof Answers | 'time' | 'random'
}

export interface RankedFood {
    food: Food
    score: number
    confidence: number
    reasons: RecommendationReason[]
}

/* ---------- 사용자 응답 ---------- */

export interface Answers {
    spicy?: number
    soup?: boolean | null
    solo?: boolean
    heavy?: boolean
    rice?: boolean
    greasy?: boolean
    fast?: boolean
    meat?: boolean
    healthy?: boolean
    adventurous?: boolean

    // 👉 질문 15개, 20개로 늘어도 여기에만 추가
}
