<template>
    <div class="recommend">
        <div class="item" v-for="item of '12345'">
            <div class="flex">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513860220143&di=7a8c7f69e188ef3938e629ec6d2e8982&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f7afc06a3f790e0cf3d7cad674.jpg" alt="">
                <div class="info">
                    <div class="name">
                        北京爆肚
                    </div>

                    <div class="describe over">
                        老北京有"要吃秋，有爆肚"的说法，而且老人都很讲究在立秋的时候吃爆肚。北京最出名的爆肚有满、张、冯、王等几家。爆肚满在菜市口、爆肚冯在前门外门框胡同
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import store from '../store/index'
    export default {
        name: "recommend",
        store,
        created: function () {
          this.$store.commit('setTitle', '推荐')
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

</style>
