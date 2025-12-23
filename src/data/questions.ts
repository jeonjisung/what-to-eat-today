import type { Question } from '@/types/recommendation'

export const questions: Question[] = [
    {
        id: 1,
        key: 'spicy',
        text: '매운 음식 좋아해?',
        options: [
            { label: '완전 좋아', value: 2 },
            { label: '보통', value: 1 },
            { label: '싫어', value: 0 }
        ]
    },
    {
        id: 2,
        key: 'soup',
        text: '국물 있는 음식이 좋아?',
        options: [
            { label: '필수', value: true },
            { label: '상관없어', value: null },
            { label: '별로야', value: false }
        ]
    },
    {
        id: 3,
        key: 'solo',
        text: '혼자 먹어?',
        options: [
            { label: '혼밥', value: true },
            { label: '같이 먹어', value: false }
        ]
    },
    {
        id: 4,
        key: 'heavy',
        text: '든든한 식사가 좋아?',
        options: [
            { label: '든든하게', value: true },
            { label: '가볍게', value: false }
        ]
    },
    {
        id: 5,
        key: 'rice',
        text: '밥이 꼭 있어야 해?',
        options: [
            { label: '밥 필수', value: true },
            { label: '없어도 돼', value: false }
        ]
    },
    {
        id: 6,
        key: 'greasy',
        text: '기름진 음식은 어때?',
        options: [
            { label: '좋아', value: true },
            { label: '싫어', value: false }
        ]
    },
    {
        id: 7,
        key: 'fast',
        text: '빨리 먹고 싶어?',
        options: [
            { label: '응', value: true },
            { label: '천천히', value: false }
        ]
    },
    {
        id: 8,
        key: 'meat',
        text: '고기 좋아해?',
        options: [
            { label: '고기 최고', value: true },
            { label: '상관없어', value: false }
        ]
    },
    {
        id: 9,
        key: 'healthy',
        text: '오늘은 건강식?',
        options: [
            { label: '건강이 중요', value: true },
            { label: '맛 우선', value: false }
        ]
    },
    {
        id: 10,
        key: 'adventurous',
        text: '새로운 메뉴 도전?',
        options: [
            { label: '도전!', value: true },
            { label: '익숙한 게 좋아', value: false }
        ]
    }
]
