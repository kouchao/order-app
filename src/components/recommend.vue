<template>
    <div class="recommend">
        <div class="item" v-for="item of recommendList">
            <div class="flex">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513860220143&di=7a8c7f69e188ef3938e629ec6d2e8982&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f7afc06a3f790e0cf3d7cad674.jpg" alt="">
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
        </div>
    </div>

</template>

<script>
    import store from '../store/index'
    export default {
        name: "recommend",
        data () {
           return {
             recommendList: []
           }
        },
        store,
        created: function () {
            this.$store.commit('setTitle', '推荐')
            this.getRecommend(0)
        },
        methods: {
            getRecommend (page) {
                var _this = this;
                let url = `${this.$baseUrl}/recommend`;

                let params = {
                    page: page,
                    size: 10
                }

                this.$ajax(url,{
                    params: params
                }).then(function (res) {
                    if(res.data.code == 0) {
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

  .info>div {
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
