<template>
  <div id="app">
    <yd-layout>
      <yd-navbar slot="navbar" title="点餐系统">

        <div @click="back" slot="left">
          <yd-navbar-back-icon></yd-navbar-back-icon>
        </div>

        <div @click="shopCar = true" slot="right">
          已点
        </div>
      </yd-navbar>

      <router-view/>

      <yd-tabbar slot="tabbar">
        <yd-tabbar-item title="首页" type="link" :link="{ name: 'recommend'}" :active="$route.name == 'recommend'">
          <yd-icon name="home" slot="icon"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="分类" type="link" :link="{ name: 'category'}" :active="$route.name == 'category'">
          <yd-icon name="shopcart" slot="icon"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="服务员" type="link" :link="{ name: 'waiter'}" :active="$route.name == 'waiter'">
          <yd-icon name="like" slot="icon"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="搜索" type="link" :link="{ name: 'search'}" :active="$route.name == 'search'">
          <yd-icon name="search" slot="icon"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="订单" type="link" :link="{ name: 'order'}" :active="$route.name == 'order'">
          <yd-icon name="feedback" slot="icon"></yd-icon>
        </yd-tabbar-item>
      </yd-tabbar>

    </yd-layout>

    <yd-popup v-model="shopCar" position="bottom" height="60%">
      <div class="shopCarTitle">已点菜品</div>
      <yd-list theme="4" v-if="shopCarList.length > 0">
        <yd-list-item v-for="item, key in shopCarList" :key="key">
          <img slot="img" :src="item.image">
          <span slot="title">{{item.name}}</span>
          <yd-list-other slot="other">
            <div>
              <span class="list-price"><em>¥</em>{{item.price}}</span>
              <span class="list-del-price">¥{{item.old_price}}</span>
            </div>
            <yd-spinner min="0" unit="1" v-model="item.count"></yd-spinner>
          </yd-list-other>
        </yd-list-item>
      </yd-list>
      <div class="no-list" v-else>
        空空如也,快去点餐吧！
      </div>
      <div class="submit-order" @click="submitOrder">提交菜单</div>
    </yd-popup>
  </div>
</template>

<script>
  import store from './store/index'
  import api from './utils/api'
  import Bus from './utils/Bus'
  export default {
    name: 'app',
    data(){
      return {
        shopCar: false
      }
    },
    sockets:{
      connect: function(){
        this.id = this.$socket.id
        console.log('$socket.id: ' + this.$socket.id)
      }
    },
    created(){
      if(this.$route.query.tableId){
        sessionStorage.tableId = this.$route.query.tableId
        this.getTable()
      }
    },
    computed: {
      shopCarList () {
        return store.state.shopCarList
      }
    },
    methods: {
      back(){
        this.$router.go(-1)
      },
      submitOrder(){
        if(!store.state.shopCarList || store.state.shopCarList.length == 0){
          return ;
        }

        let url = api.order

        let params = {
          food: store.state.shopCarList,
          table_id: sessionStorage.tableId,
          order_id: sessionStorage.orderId
        }

        this.$ajax.post(url, params).then(res => {
          if (res.data.code == 0) {
            this.$dialog.toast({
              mes: '订单已提交',
              timeout: 1000,
              icon: 'success'
            });
            sessionStorage.orderId ? '' : sessionStorage.orderId = res.data.data.id
            store.commit('clearShopCar')
            Bus.$emit('clearShopCar');
            this.$socket.emit('message', {
              id: this.$socket.id,
              name: sessionStorage.name,
              msg: '提交了菜单'
            });
          }
        })
      },
      getTable(){
        let url = api.table

        let params = {
          id: this.$route.query.tableId
        }

        this.$ajax(url, {
          params
        }).then(res => {
          if (res.data.code == 0) {
            sessionStorage.name = res.data.data.name
            this.$socket.emit('login', {
              id: this.$socket.id,
              name: res.data.data.name,
              msg: '登录'
            });
          }
        })
      }

    }
  }
</script>

<style scoped>
  .body {
    position: absolute;
    width: 100vw;
    overflow: auto;
  }

  .showTabBar {
    top: 46px;
    bottom: 50px;
  }

  .hideTabBar {
    top: 46px;
    bottom: 0px;
  }

  .no-list {
    padding: 50px;
    text-align: center;
  }

  #app {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
  .shopCarTitle {
    padding: 10px;
    text-align: center;
    background: #f8f8f8;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 1000;
   }

  .list-price {
    font-weight: bold;
    color: #f00;
  }

  .list-del-price {
    color: #666666;
    text-decoration: line-through;
    font-size: 12px;
    padding-left: 3px;
  }

  .submit-order {

    height: 60px;
    color: #fff;
    background: #f00;
    line-height: 60px;
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .yd-popup-content .yd-list {
    padding: 39px 0 60px;
  }

</style>
