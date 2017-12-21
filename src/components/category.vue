<template>
    <div class="category">
        <div class="item" v-for="item of categoryList">
            <div class="flex">
                <div class="info">
                    <div class="name">
                        {{item.name}}
                    </div>
                </div>
            </div>
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
        </div>
    </div>

</template>

<script>
    import store from '../store/index'
    export default {
        name: "category",
        data () {
           return {
             categoryList: []
           }
        },
        store,
        created: function () {
            this.$store.commit('setTitle', '分类')
            this.getCategory(0)
        },
        methods: {
            getCategory (page) {
                var _this = this;
                let url = `${this.$baseUrl}/category`;

                let params = {
                    page: page,
                    size: 10
                }

                this.$ajax(url,{
                    params: params
                }).then(function (res) {
                    if(res.data.code == 0) {
                      console.log(res.data.dataList)
                        _this.categoryList = res.data.dataList


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

  .info>div {
      width: calc(100vw - 105px - 60px);
  }

</style>
