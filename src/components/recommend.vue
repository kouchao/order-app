<template>
  <div class="recommend">
    <router-link class="item" :to="{ name: 'details', params: { id: item.food.id }}" v-for="item of recommendList">
      <div class="flex">
        <img
          :src="$imageUrl + item.food.image"
          alt="">
        <div class="info">
          <div class="name">
            {{item.food.name}}
          </div>

          <div class="describe over">
            {{item.food.describe}}
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="price">¥{{item.food.price}}</div>
        <div class="oldPrice">¥{{item.food.old_price}}</div>
      </div>
    </router-link>
  </div>

</template>

<script>
  import store from '../store/index'

  export default {
    name: "recommend",
    data() {
      return {
        recommendList: []
      }
    },
    store,
    created: function () {
      this.$store.commit('setTitle', '推荐')
      this.$store.commit('setActiveTab', this.$route.name)
      this.getRecommend(0)
    },
    methods: {
      getRecommend(page) {
        var _this = this;
        let url = `${this.$baseUrl}/recommend`;

        let params = {
          page: page,
          size: 10
        }

        this.$ajax(url, {
          params: params
        }).then(function (res) {
          if (res.data.code == 0) {
            _this.recommendList = res.data.dataList
          }
        })
      }
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
