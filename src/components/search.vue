<template>
  <div>
    <yd-search v-model="value" :on-cancel="cancelHandler" :on-submit="submitHandler"></yd-search>

    <div style="padding: 10px">
      <div class="history-title" v-if="history.length > 0">
        <div>历史搜索</div>
        <div @click="clearHistory">
          <yd-icon name="delete" size="16px"></yd-icon>
        </div>

      </div>
      <span class="yd-badge" @click="submitHandler(item)" v-for="item in history">{{item}}</span>
    </div>

  </div>

</template>

<script>
  import store from '../store/index'
  export default {
    name: "search",
    data() {
      return {
        value: '',
        history: []
      }
    },
    created(){
      this.history = JSON.parse(localStorage.history || '[]')
    },
    methods: {
      submitHandler(name) {
        name = name.replace(/\s+/g, "")
        name ? this.pushHistory(name) : '';
        this.$router.push({
          name: 'food',
          query: {
            name
          }
        })
      },
      cancelHandler(){
        this.value = ''
      },
      pushHistory(name){
        let arr = Array.from(new Set([name, ...this.history]))
        this.history = arr.filter((item, index) => index < 10)
        localStorage.history = JSON.stringify(this.history)
      },
      clearHistory(){

        this.$dialog.confirm({
          mes: '确认删除全部历史记录?',
          opts: () => {
            this.history = []
            localStorage.history = JSON.stringify(this.history)
          }
        });

      }
    }
  }
</script>

<style scoped>
  .yd-badge {
    margin: 10px;
    padding: 5px 10px;
  }

  .history-title {
    display: flex;
    justify-content: space-between;
  }
</style>
