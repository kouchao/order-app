<template>
  <div class="recommend">
    <div class="item" v-for="item of foodList">
      <div class="flex">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513860220143&di=7a8c7f69e188ef3938e629ec6d2e8982&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f7afc06a3f790e0cf3d7cad674.jpg"
          alt="">
        <div class="info">
          <div class="name">
            {{item.name}}
          </div>

          <div class="describe over">
            {{item.describe}}
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="price">¥{{item.price}}</div>
        <div class="oldPrice">¥{{item.old_price}}</div>
      </div>
    </div>
  </div>

</template>

<script>
  import store from '../store/index'

  export default {
    name: "food-list",
    data() {
      return {
        foodList: []
      }
    },
    store,
    created: function () {
      console.log(this.$route.params.categoryId)
      if(this.$route.params.categoryId) {
        this.categoryId = this.$route.params.categoryId
      }
      this.$store.commit('setTitle', '列表')
      this.$store.commit('setActiveTab', this.$route.name)
      this.$store.commit('hideTabBar')
      this.getFood(0)
    },
    methods: {
      getFood(page) {
        var _this = this;
        let url = `${this.$baseUrl}/food`;

        let categoryId = this.categoryId || ''

        let params = {
          page: page,
          size: 10,
          categoryId: categoryId
        }

        this.$ajax(url, {
          params: params
        }).then(function (res) {
          if (res.data.code == 0) {
            _this.foodList = res.data.dataList
          }
        })
      }
    },
    destroyed: function () {
      this.$store.commit('showTabBar')
    }
  }
</script>

<style scoped>

  .item {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .item:active {
    background: #f2f2f2;
  }

  .item + .item {
    border-top: 1px solid #f2f2f2;
  }

  .item img {
    width: 60px;
    height: 60px;
    margin-right: 15px;
  }

  .info > div {
    width: calc(100vw - 105px - 60px);
  }

  .info .describe {
    font-size: 12px;
    color: #666;
  }

  .price {
    font-weight: bold;
    color: #f00;
  }

  .oldPrice {
    color: #f2f2f2;
    text-decoration: line-through;
    font-size: 12px;
    padding-left: 3px;
  }

</style>
