import type { Food } from '@/types/recommendation'

export const foods: Food[] = [
    /* ---------------- 한식 ---------------- */

    {
        name: '김치찌개',
        spicy: 2,
        soup: true,
        solo: true,
        tags: ['밥', '국물', '매운', '한식'],
        time: ['lunch', 'dinner'],
        image: '/images/foods/kimchi-stew.jpg'
    },
    {
        name: '된장찌개',
        spicy: 0,
        soup: true,
        solo: true,
        tags: ['밥', '국물', '한식'],
        time: ['lunch', 'dinner'],
        image: '/images/foods/soybean-stew.jpg'
    },
    {
        name: '순두부찌개',
        spicy: 1,
        soup: true,
        solo: true,
        tags: ['밥', '국물', '한식'],
        time: ['lunch', 'dinner'],
        image: '/images/foods/soft-tofu-stew.jpg'
    },
    {
        name: '비빔밥',
        spicy: 1,
        soup: false,
        solo: true,
        tags: ['밥', '건강', '한식'],
        time: ['lunch', 'dinner'],
        image: '/images/foods/bibimbap.jpg'
    },
    {
        name: '불고기',
        spicy: 0,
        soup: false,
        solo: false,
        tags: ['고기', '밥', '한식'],
        time: ['lunch', 'dinner'],
        image: '/images/foods/bulgogi.jpg'
    },
    {
        name: '삼겹살',
        spicy: 0,
        soup: false,
        solo: false,
        tags: ['고기', '기름진', '한식'],
        time: ['dinner'],
        image: '/images/foods/pork-belly.jpg'
    },

    /* ---------------- 분식 ---------------- */

    {
        name: '떡볶이',
        spicy: 2,
        soup: false,
        solo: true,
        tags: ['매운', '야식'],
        time: ['lunch', 'dinner', 'late'],
        image: '/images/foods/tteokbokki.jpg'
    },
    {
        name: '김밥',
        spicy: 0,
        soup: false,
        solo: true,
        tags: ['밥', '간편'],
        time: ['breakfast', 'lunch'],
        image: '/images/foods/gimbap.jpg'
    },

    /* ---------------- 면 ---------------- */

    {
        name: '라면',
        spicy: 1,
        soup: true,
        solo: true,
        tags: ['면', '국물', '간편'],
        time: ['lunch', 'late'],
        image: '/images/foods/ramen.jpg'
    },
    {
        name: '우동',
        spicy: 0,
        soup: true,
        solo: true,
        tags: ['면', '국물', '일식'],
        time: ['lunch', 'dinner'],
        image: '/images/foods/udon.jpg'
    },
    {
        name: '짜장면',
        spicy: 0,
        soup: false,
        solo: true,
        tags: ['면', '중식'],
        time: ['lunch', 'dinner'],
        image: '/images/foods/jajang.jpg'
    },
    {
        name: '짬뽕',
        spicy: 2,
        soup: true,
        solo: true,
        tags: ['면', '국물', '매운', '중식'],
        time: ['lunch', 'dinner'],
        image: '/images/foods/jjamppong.jpg'
    },

    /* ---------------- 일식 ---------------- */

    {
        name: '초밥',
        spicy: 0,
        soup: false,
        solo: false,
        tags: ['밥', '일식', '가벼움'],
        time: ['lunch', 'dinner'],
        image: '/images/foods/sushi.jpg'
    },
    {
        name: '돈까스',
        spicy: 0,
        soup: false,
        solo: true,
        tags: ['튀김', '일식'],
        time: ['lunch', 'dinner'],
        image: '/images/foods/tonkatsu.jpg'
    },

    /* ---------------- 양식 ---------------- */

    {
        name: '파스타',
        spicy: 0,
        soup: false,
        solo: false,
        tags: ['면', '양식'],
        time: ['lunch', 'dinner'],
        image: '/images/foods/pasta.jpg'
    },
    {
        name: '피자',
        spicy: 0,
        soup: false,
        solo: false,
        tags: ['치즈', '양식'],
        time: ['dinner', 'late'],
        image: '/images/foods/pizza.jpg'
    },
    {
        name: '햄버거',
        spicy: 0,
        soup: false,
        solo: true,
        tags: ['간편', '양식'],
        time: ['lunch', 'dinner'],
        image: '/images/foods/burger.jpg'
    },

    /* ---------------- 건강 / 가벼움 ---------------- */

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
        name: '포케',
        spicy: 0,
        soup: false,
        solo: true,
        tags: ['밥', '건강'],
        time: ['lunch'],
        image: '/images/foods/poke.jpg'
    },

    /* ---------------- 야식 ---------------- */

    {
        name: '치킨',
        spicy: 1,
        soup: false,
        solo: false,
        tags: ['튀김', '야식'],
        time: ['dinner', 'late'],
        image: '/images/foods/chicken.jpg'
    },
    {
        name: '족발',
        spicy: 0,
        soup: false,
        solo: false,
        tags: ['고기', '야식'],
        time: ['dinner', 'late'],
        image: '/images/foods/jokbal.jpg'
    },

    /* ---------------- 아침 ---------------- */

    {
        name: '토스트',
        spicy: 0,
        soup: false,
        solo: true,
        tags: ['간편'],
        time: ['breakfast'],
        image: '/images/foods/toast.jpg'
    },
    {
        name: '죽',
        spicy: 0,
        soup: true,
        solo: true,
        tags: ['밥', '가벼움'],
        time: ['breakfast'],
        image: '/images/foods/porridge.jpg'
    }
]
