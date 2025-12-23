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

export interface Food {
    name: string
    spicy: number
    soup: boolean
    solo: boolean
    tags: string[]
    time: TimeType[]
    image: string
}

export interface RecommendationReason {
    text: string
    score: number
}

export interface RankedFood {
    food: Food
    score: number
    reasons: RecommendationReason[]
}

export type TimeSlot = 'breakfast' | 'lunch' | 'dinner' | 'late'

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
}

