import { createRouter, createWebHistory } from 'vue-router'
import StartView from '@/views/StartView.vue'
import QuestionView from '@/views/QuestionView.vue'
import ResultView from '@/views/ResultView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'start',
            component: StartView
        },
        {
            path: '/question',
            name: 'question',
            component: QuestionView
        },
        {
            path: '/result',
            name: 'result',
            component: ResultView
        }
    ]
})

export default router
