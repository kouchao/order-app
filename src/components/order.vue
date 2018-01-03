<template>
  <span>订单</span>
</template>

<script>
  import store from '../store/index'
  export default {
    name: "order",
    store,
    created: function () {
      this.$store.commit('setTitle', '订单')
      this.$store.commit('setActiveTab', this.$route.name)
    }
  }
</script>

<style scoped>

</style>
