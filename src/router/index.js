import Vue from 'vue'
import Router from 'vue-router'
import recommend from '@/components/recommend'
import category from '@/components/category'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'recommend',
            component: recommend
        },
        {
            path: '/category',
            name: 'category',
            component: category
        }
    ]
})
