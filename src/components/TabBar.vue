<template>
  <div class="tab-bar">
    <router-link :to="item.name" class="item" v-for="item of tabBarList" :class="{active: item.name == activeTab}">
      <i class='fa' :class="item.icon" aria-hidden="true"></i>
      <div>{{item.text}}</div>
    </router-link>
  </div>
</template>

<script>
  import store from '../store/index'

  export default {
    name: 'tab-bar',
    data() {
      return {
        tabBarList: [{
          name: 'recommend',
          text: '首页',
          icon: 'fa-heart-o'
        }, {
          name: 'category',
          text: '分类',
          icon: 'fa-heart-o'
        }, {
          name: 'waiter',
          text: '服务员',
          icon: 'fa-heart-o'
        }, {
          name: 'search',
          text: '搜索',
          icon: 'fa-heart-o'
        }, {
          name: 'order',
          text: '订单',
          icon: 'fa-heart-o'
        }]
      }
    },
    store,
    computed: {
      activeTab() {
        const {tabBar} = store.state
        return tabBar.activeTab
      }
    }
  }
</script>

<style scoped>
  .tab-bar {
    position: fixed;
    height: 49px;
    bottom: 0;
    left: 0;
    width: 100vw;
    border-top: 1px solid #f2f2f2;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .item {
    text-align: center;
  }

  .item.active {
    color: #f00;
  }
</style>
