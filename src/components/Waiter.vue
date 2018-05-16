<template>
  <div>

    <div class="banner">
      <img src="../assets/服务员banner.jpg" alt="">
    </div>

    <div class="btn-item">
      <div class="btn" @click="openNotify">呼叫服务员</div>
    </div>
  </div>
</template>

<script>
  import api from '../utils/api'

  export default {
    name: "Waiter",
    methods: {
    openNotify() {
      this.$dialog.notify({
        mes: '服务员正在赶来的路上，请稍候。',
        timeout: 1000,
        callback: () => {
          console.log('我走咯！');
        }
      });
      this.$socket.emit('message', {
        id: this.$socket.id,
        name: sessionStorage.name,
        msg: '呼叫服务员'
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
