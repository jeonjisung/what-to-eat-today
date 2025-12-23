import type { Food } from '@/types/recommendation'

export const foods: Food[] = [
    {
        name: '김치찌개',
        spicy: 2,
        soup: true,
        solo: true,
        tags: ['매운', '국물', '한식'],
        time: ['lunch', 'dinner'],
        image: '/images/foods/kimchi-stew.jpg'
    },
    {
        name: '라면',
        spicy: 1,
        soup: true,
        solo: true,
        tags: ['간편', '국물'],
        time: ['lunch', 'dinner'],
        image: '/images/foods/ramen.jpg'
    },
    {
        name: '초밥',
        spicy: 0,
        soup: false,
        solo: false,
        tags: ['일식', '가벼움'],
        time: ['lunch', 'dinner'],
        image: '/images/foods/sushi.jpg'
    }
]
