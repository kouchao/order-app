<template>
  <div id="app">
    <nav-bar></nav-bar>

    <div class="body">
      <router-view/>
    </div>

    <tab-bar></tab-bar>
  </div>
</template>

<script>
  import tabBar from './components/TabBar'
  import navBar from './components/NavBar'

  export default {
    name: 'app',
    components: {
      tabBar,
      navBar
    }
  }
</script>

<style scoped>
  .body {
    position: absolute;
    top: 40px;
    bottom: 50px;
    width: 100vw;
    overflow: auto;
  }

  #app {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
</style>
