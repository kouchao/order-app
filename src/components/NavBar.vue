<template>
  <div class="nav-bar">
    <div class="left-btn"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>
    <div>{{title}}</div>
    <div class="right-btn"><i class="fa fa-search" aria-hidden="true"></i></div>
  </div>
</template>

<script>
  import store from '../store/index'

  export default {
    name: 'nav-bar',
    store,
    computed: {
      title() {
        return store.state.title
      }
    }
  }
</script>

<style scoped>
  .nav-bar {
    position: fixed;
    height: 45px;
    top: 0;
    left: 0;
    width: 100vw;
    border-bottom: 1px solid #f2f2f2;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .left-btn {
    width: 50px;
    padding-left: 15px;
  }

  .right-btn {
    width: 50px;
    padding-right: 15px;
    text-align: right;
  }


</style>
