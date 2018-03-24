<template>
  <yd-search v-model="value1" :on-cancel="cancelHandler" :on-submit="submitHandler"></yd-search>
</template>

<script>
  import store from '../store/index'
  export default {
    name: "search",
    data() {
      return {
        value1: ''
      }
    },
    methods: {
      submitHandler(value) {
        this.$dialog.toast({mes: `搜索：${value}`});
      },
      cancelHandler(){
        this.value1 = ''
      }
    }
  }
</script>

<style scoped>

</style>
