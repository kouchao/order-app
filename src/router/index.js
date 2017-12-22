import Vue from 'vue'
import Router from 'vue-router'
import recommend from '@/components/recommend'
import category from '@/components/category'
import food from '@/components/food'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'recommend',
      component: recommend
    },
    {
      path: '/recommend',
      redirect: {
        name: 'recommend'
      }
    },
    {
      path: '/category',
      name: 'category',
      component: category
    },
    {
      path: '/food/:categoryId',
      name: 'food',
      component: food
    }
  ]
})
