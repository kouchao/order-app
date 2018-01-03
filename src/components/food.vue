<template>
  <div class="food">
    <router-link class="item" :to="{ name: 'details', params: { id: item.id }}" v-for="item of foodList">
      <div class="flex">
        <img
          :src="$imageUrl + item.image"
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
    </router-link>
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
      if(this.$route.params.categoryId) {
        this.categoryId = this.$route.params.categoryId
      }
      this.$store.commit('setTitle', '列表')
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
          category_id: categoryId
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
