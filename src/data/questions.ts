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
        text: '국물 있는 음식은 어때?',
        options: [
            { label: '필수지', value: true },
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
        text: '오늘은 든든하게 먹고 싶어?',
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
            { label: '상관없어', value: false }
        ]
    },
    {
        id: 6,
        key: 'fast',
        text: '빨리 먹을 수 있는 게 좋아?',
        options: [
            { label: '빠른 게 좋아', value: true },
            { label: '천천히 먹어도 돼', value: false }
        ]
    },
    {
        id: 7,
        key: 'meat',
        text: '고기 메뉴 땡겨?',
        options: [
            { label: '고기 최고', value: true },
            { label: '상관없어', value: false }
        ]
    },
    {
        id: 8,
        key: 'healthy',
        text: '오늘은 건강식이 좋아?',
        options: [
            { label: '건강이 중요', value: true },
            { label: '맛이 중요', value: false }
        ]
    },
    {
        id: 9,
        key: 'greasy',
        text: '기름진 음식은 어때?',
        options: [
            { label: '좋아', value: true },
            { label: '별로야', value: false }
        ]
    },
    {
        id: 10,
        key: 'adventurous',
        text: '새로운 메뉴 도전해볼까?',
        options: [
            { label: '도전!', value: true },
            { label: '익숙한 게 좋아', value: false }
        ]
    }

    // 👉 11~15번 질문 여기 계속 추가 가능
]
