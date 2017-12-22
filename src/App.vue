<template>
  <div id="app">
    <nav-bar></nav-bar>

    <div class="body" :class="hideOrShowTabBar ? 'showTabBar' : 'hideTabBar'">
      <router-view/>
    </div>

    <tab-bar v-if="hideOrShowTabBar"></tab-bar>
  </div>
</template>

<script>
  import tabBar from './components/TabBar'
  import navBar from './components/NavBar'
  import store from './store/index'

  export default {
    name: 'app',
    computed: {
      hideOrShowTabBar() {
        return store.state.hideOrShowTabBar
      }
    },
    store,
    components: {
      tabBar,
      navBar
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
    top: 40px;
    bottom: 50px;
  }

  .hideTabBar {
    top: 40px;
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
