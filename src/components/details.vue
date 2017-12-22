<template>
  <div class="details">
    <img
      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513860220143&di=7a8c7f69e188ef3938e629ec6d2e8982&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f7afc06a3f790e0cf3d7cad674.jpg"
      alt="">
    <div class="name">
      <div>{{details.name}}</div>
      <div class="price">¥{{details.price}}</div>
    </div>
    <!--<div class="oldPrice">¥{{details.old_price}}</div>-->


    <div class="describe over">
      {{details.describe}}
    </div>

    <div class="add">点</div>

  </div>


</template>

<script>
  import store from '../store/index'

  export default {
    name: "food-list",
    data() {
      return {
        details: {}
      }
    },
    store,
    created: function () {
      if (this.$route.params.id) {
        this.id = this.$route.params.id
      }

      this.$store.commit('hideTabBar')
      this.getFood(0)
    },
    methods: {
      getFood(page) {
        var _this = this;
        let url = `${this.$baseUrl}/food`;

        let id = this.id

        let params = {
          page: page,
          size: 10,
          id: id
        }

        this.$ajax(url, {
          params: params
        }).then(function (res) {
          if (res.data.code == 0) {
            _this.details = res.data.data
            _this.$store.commit('setTitle', _this.details.name)

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
  img {
    width: 100vw;
    height: 100vw;
  }

  .name {
    font-size: 16px;
    padding: 15px;
    font-weight: bold;
    border-bottom: 1px solid #f2f2f2;
    display: flex;
    justify-content: space-between;
  }

  .describe {
    padding: 15px;
    color: #666;
  }

  .price {
    font-size: 16px;
    color: #f00;
  }

  .add {
    background: #f00;
    color: #fff;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 30px;
    bottom: 30px;

  }

</style>
