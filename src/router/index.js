import Vue from 'vue'
import Router from 'vue-router'
import recommend from '@/components/recommend'
import category from '@/components/category'
import food from '@/components/food'
import details from '@/components/details'
import waiter from '@/components/waiter'
import search from '@/components/search'
import order from '@/components/order'




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
      path: '/waiter',
      name: 'waiter',
      component: waiter
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/order',
      name: 'order',
      component: order
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
    },
    {
      path: '/details/:id',
      name: 'details',
      component: details
    }
  ]
})
