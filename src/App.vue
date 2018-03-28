<template>
  <div id="app">
    <yd-layout>
      <yd-navbar slot="navbar" title="点餐系统">

        <div @click="back" slot="left">
          <yd-navbar-back-icon></yd-navbar-back-icon>
        </div>

        <div @click="shopCar = true" slot="right">
          已点
        </div>
      </yd-navbar>

      <router-view/>

      <yd-tabbar slot="tabbar">
        <yd-tabbar-item title="首页" type="link" :link="{ name: 'recommend'}">
          <yd-icon name="home" slot="icon"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="分类" type="link" :link="{ name: 'category'}">
          <yd-icon name="shopcart" slot="icon"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="服务员" type="link" :link="{ name: 'waiter'}">
          <yd-icon name="like" slot="icon"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="搜索" type="link" :link="{ name: 'search'}">
          <yd-icon name="search" slot="icon"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="订单" type="link" :link="{ name: 'order'}">
          <yd-icon name="feedback" slot="icon"></yd-icon>
        </yd-tabbar-item>
      </yd-tabbar>

    </yd-layout>

    <yd-popup v-model="shopCar" position="bottom" height="60%">
      <yd-list theme="4">
        <yd-list-item v-for="item, key in shopCarList" :key="key">
          <img slot="img" :src="item.image">
          <span slot="title">{{item.name}}</span>
          <yd-list-other slot="other">
            <div>
              <span class="demo-list-price"><em>¥</em>{{item.price}}</span>
              <span class="demo-list-del-price">¥{{item.old_price}}</span>
            </div>
            <yd-spinner min="0" unit="1" v-model="item.count"></yd-spinner>
          </yd-list-other>
        </yd-list-item>
      </yd-list>
    </yd-popup>
  </div>
</template>

<script>
  import store from './store/index'
  export default {
    name: 'app',
    data(){
      return {
        shopCar: false
      }
    },
    computed: {
      shopCarList () {
        return store.state.shopCarList
      }
    },
    methods: {
      back(){
        console.log(123132)
        this.$router.go(-1)
      }

    }
  }
</script>

<style scoped>
  .body {
    position: absolute;
    width: 100vw;
    overflow: auto;
  }

  .showTabBar {
    top: 46px;
    bottom: 50px;
  }

  .hideTabBar {
    top: 46px;
    bottom: 0px;
  }

  #app {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
</style>
