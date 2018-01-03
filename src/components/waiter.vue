<template>
  <span>服务员</span>
</template>

<script>
  import store from '../store/index'
  export default {
    name: "waiter",
    store,
    created: function () {
      this.$store.commit('setTitle', '服务员')
      this.$store.commit('setActiveTab', this.$route.name)
    }
  }
</script>

<style scoped>

</style>
