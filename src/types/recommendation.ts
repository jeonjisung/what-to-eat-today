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

export interface Answers {
    spicy?: number
    soup?: boolean | null
    solo?: boolean
}

export interface Food {
    name: string
    spicy: number
    soup: boolean
    solo: boolean
    tags: string[]
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
