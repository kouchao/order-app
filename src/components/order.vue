<template>
  <div>
    <yd-preview :buttons="btns">
      <yd-preview-header>
        <div slot="left">付款金额</div>
        <div slot="right">¥{{total}}</div>
      </yd-preview-header>

      <yd-preview-item v-for="item in orderList">
        <div slot="left">{{item.food.name}}</div>
        <div slot="right">x{{item.count}} {{item.food.price}}元</div>
      </yd-preview-item>
    </yd-preview>
  </div>
</template>

<script>
  import api from '../utils/api'
  export default {
    name: "order",
    data() {
      return {
        btns: [],
        total: 0,
        orderList: []
      }
    },
    created: function () {
      this.getOrder()
    },
    methods: {
      getOrder(){
        let url = api.orderDetail;

        let params = {
          id: sessionStorage.orderId
        }

        this.$ajax(url, {
          params: params
        }).then(res => {
          if (res.data.code == 0) {
            let total = 0
            res.data.dataList.forEach(o => {
              o.completed_number = o.completed_number || 0
              total += o.count * o.food.price
            })
            this.total = total
            this.orderList = res.data.dataList
          }
        }).finally(() => {
          this.loading = false
        })
      }
    }
  }
</script>

<style scoped>

</style>
