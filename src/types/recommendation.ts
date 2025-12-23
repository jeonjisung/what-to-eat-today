/* =========================
   질문 타입
========================= */

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

/* =========================
   시간대
========================= */

export type TimeSlot = 'breakfast' | 'lunch' | 'dinner' | 'late'

/* =========================
   음식 핵심 정보
   👉 "사실"만 보유
========================= */

export interface Food {
    name: string
    spicy: number            // 0~2
    soup: boolean
    solo: boolean
    tags: FoodTag[]
    time: TimeSlot[]
    image: string
}

/* =========================
   태그 (의미 단위로 통제)
========================= */

export type FoodTag =
    | '한식'
    | '중식'
    | '일식'
    | '양식'
    | '분식'
    | '고기'
    | '국물'
    | '매운'
    | '기름진'
    | '튀김'
    | '건강'
    | '가벼움'
    | '간편'
    | '야식'
    | '면'
    | '밥'
    | '치즈'
    | '아침'

/* =========================
   사용자 응답
========================= */

export interface Answers {
    spicy?: number            // 0~2
    soup?: boolean | null
    solo?: boolean
    heavy?: boolean           // 든든 vs 가벼움
    rice?: boolean
    greasy?: boolean
    fast?: boolean
    meat?: boolean
    healthy?: boolean
    adventurous?: boolean
}

/* =========================
   추천 이유
========================= */

export interface RecommendationReason {
    /** 사용자에게 보여줄 문장 */
    text: string

    /** 이 이유가 기여한 점수 */
    score: number

    /** 어떤 질문에서 나왔는지 (디버그/UX용) */
    source?: keyof Answers
}

/* =========================
   랭킹 결과
========================= */

export interface RankedFood {
    food: Food
    score: number
    reasons: RecommendationReason[]
}
