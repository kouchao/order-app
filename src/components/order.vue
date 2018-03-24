<template>
  <div>
    <yd-preview :buttons="btns">
      <yd-preview-header>
        <div slot="left">付款金额</div>
        <div slot="right">¥2400.00</div>
      </yd-preview-header>

      <yd-preview-item>
        <div slot="left">土豆丝</div>
        <div slot="right">x2 10</div>
      </yd-preview-item>
      <yd-preview-item>
        <div slot="left">西红柿</div>
        <div slot="right">x5 20</div>
      </yd-preview-item>
    </yd-preview>
  </div>
</template>

<script>
  import store from '../store/index'
  export default {
    name: "order",
    data() {
      return {
        btns: [
          {
            text: '立即付款',
            click: () => {
              alert('立即付款');
            }
          },
          {
            color: '#F00',
            text: '线下付款',
            click: () => {
              alert('线下付款');
            }
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
