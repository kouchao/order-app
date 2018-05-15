<template>
  <div class="category">

    <yd-cell-item arrow arrow type="link" :href="{ name: 'food', params: { categoryId: item.id }}" v-for="item of categoryList">
      <span slot="left"> {{item.name}}</span>
    </yd-cell-item>
  </div>

</template>

<script>
  import store from '../store/index'

  export default {
    name: "category",
    data() {
      return {
        categoryList: []
      }
    },
    store,
    created: function () {
      this.getCategory(0)
    },
    methods: {
      getCategory(page) {
        var _this = this;
        let url = `${this.$baseUrl}/category`;

        let params = {
          page: page,
          size: 10
        }

        this.$ajax(url, {
          params: params
        }).then(function (res) {
          if (res.data.code == 0) {
            _this.categoryList = res.data.dataList
          }
        })
      }
    }
  }
</script>

<style scoped>
  .yd-cell-item {
    background: #fff;
  }
</style>
