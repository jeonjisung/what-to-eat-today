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
    }
]
