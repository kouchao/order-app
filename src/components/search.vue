<template>
  <span>搜索</span>
</template>

<script>
  import store from '../store/index'
  export default {
    name: "search",
    store,
    created: function () {
      this.$store.commit('setTitle', '搜索')
      this.$store.commit('setActiveTab', this.$route.name)
    }
  }
</script>

<style scoped>

</style>
