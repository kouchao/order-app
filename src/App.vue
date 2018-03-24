<template>
  <div id="app">
    <yd-layout>
      <yd-navbar slot="navbar" title="NavBar">

        <div @click="back" slot="left">
          <yd-navbar-back-icon></yd-navbar-back-icon>
        </div>

        <router-link to="#" slot="right">
          已点
        </router-link>
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
  </div>
</template>

<script>

  export default {
    name: 'app',
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
