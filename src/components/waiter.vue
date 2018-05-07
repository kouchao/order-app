<template>
  <div>

    <div class="banner">
      <img src="../assets/服务员banner.jpg" alt="">
    </div>

    <div class="btn-item">
      <div class="btn" @click="openNotify">取消呼叫</div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "waiter",
    methods: {
    openNotify() {
      this.$dialog.notify({
        mes: '服务员正在赶来的路上，请稍候。',
        timeout: 3000,
        callback: () => {
          console.log('我走咯！');
        }
      });
    }
    }
  }
</script>

<style scoped>
  .banner img {
    width: 100%;
    height: auto;
  }

  .btn-item {
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .btn {
    padding: 15px 30px;
    background: #f44336;
    border-radius: 30px;
    color: #fff;
  }
</style>
