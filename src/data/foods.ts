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
        name: '된장찌개',
        spicy: 0,
        soup: true,
        solo: true,
        tags: ['구수한', '국물', '한식'],
        time: ['lunch', 'dinner'],
        image: '/images/foods/soybean-stew.jpg'
    },
    {
        name: '순두부찌개',
        spicy: 1,
        soup: true,
        solo: true,
        tags: ['부드러운', '국물'],
        time: ['lunch', 'dinner'],
        image: '/images/foods/soft-tofu-stew.jpg'
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
        name: '비빔밥',
        spicy: 1,
        soup: false,
        solo: true,
        tags: ['한식', '건강'],
        time: ['lunch', 'dinner'],
        image: '/images/foods/bibimbap.jpg'
    },
    {
        name: '불고기',
        spicy: 0,
        soup: false,
        solo: false,
        tags: ['고기', '한식'],
        time: ['lunch', 'dinner'],
        image: '/images/foods/bulgogi.jpg'
    },
    {
        name: '삼겹살',
        spicy: 0,
        soup: false,
        solo: false,
        tags: ['고기', '기름진'],
        time: ['dinner'],
        image: '/images/foods/pork-belly.jpg'
    },
    {
        name: '돈까스',
        spicy: 0,
        soup: false,
        solo: true,
        tags: ['튀김', '일식'],
        time: ['lunch', 'dinner'],
        image: '/images/foods/pork-cutlet.jpg'
    },
    {
        name: '초밥',
        spicy: 0,
        soup: false,
        solo: false,
        tags: ['일식', '가벼움'],
        time: ['lunch', 'dinner'],
        image: '/images/foods/sushi.jpg'
    },
    {
        name: '우동',
        spicy: 0,
        soup: true,
        solo: true,
        tags: ['일식', '국물'],
        time: ['lunch', 'dinner'],
        image: '/images/foods/udon.jpg'
    },
    {
        name: '짜장면',
        spicy: 0,
        soup: false,
        solo: true,
        tags: ['중식', '면'],
        time: ['lunch', 'dinner'],
        image: '/images/foods/jajangmyeon.jpg'
    },
    {
        name: '짬뽕',
        spicy: 2,
        soup: true,
        solo: true,
        tags: ['중식', '매운'],
        time: ['lunch', 'dinner'],
        image: '/images/foods/jjamppong.jpg'
    },
    {
        name: '마라탕',
        spicy: 2,
        soup: true,
        solo: true,
        tags: ['중식', '마라'],
        time: ['lunch', 'dinner'],
        image: '/images/foods/malatang.jpg'
    },
    {
        name: '햄버거',
        spicy: 0,
        soup: false,
        solo: true,
        tags: ['패스트푸드'],
        time: ['lunch', 'dinner'],
        image: '/images/foods/burger.jpg'
    },
    {
        name: '피자',
        spicy: 0,
        soup: false,
        solo: false,
        tags: ['양식', '치즈'],
        time: ['dinner'],
        image: '/images/foods/pizza.jpg'
    },
    {
        name: '샐러드',
        spicy: 0,
        soup: false,
        solo: true,
        tags: ['건강', '가벼움'],
        time: ['lunch'],
        image: '/images/foods/salad.jpg'
    },
    {
        name: '치킨',
        spicy: 1,
        soup: false,
        solo: false,
        tags: ['튀김', '야식'],
        time: ['dinner'],
        image: '/images/foods/chicken.jpg'
    },
    {
        name: '떡볶이',
        spicy: 2,
        soup: false,
        solo: true,
        tags: ['분식', '매운'],
        time: ['lunch', 'dinner'],
        image: '/images/foods/tteokbokki.jpg'
    },
    {
        name: '김밥',
        spicy: 0,
        soup: false,
        solo: true,
        tags: ['간편', '분식'],
        time: ['breakfast', 'lunch'],
        image: '/images/foods/gimbap.jpg'
    },
    {
        name: '토스트',
        spicy: 0,
        soup: false,
        solo: true,
        tags: ['아침', '간단'],
        time: ['breakfast'],
        image: '/images/foods/toast.jpg'
    }
]
