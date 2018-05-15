<template>
  <div class="food">
    <yd-list theme="4" v-if="foodList.length > 0">
      <yd-list-item v-for="item, key in foodList" :key="key" type="link" :href="{ name: 'details', params: { id: item.id }}">
        <img slot="img" :src="item.image">
        <span slot="title">{{item.name}}</span>
        <yd-list-other slot="other">
          <div>
            <span class="price"><em>¥</em>{{item.price}}</span>
            <span class="old-price">¥{{item.old_price}}</span>
          </div>
          <div>
            <yd-spinner min="0" unit="1" v-model="item.count"></yd-spinner>
          </div>
        </yd-list-other>
      </yd-list-item>
    </yd-list>

    <div v-else style="margin-top: 100px; text-align: center">
      <img src="../assets/nodata.svg" alt="" style="width: 70%;">
      <p style="padding: 15px; font-size: 18px; color: #666666">没有数据</p>
    </div>
  </div>

</template>

<script>
  import store from '../store/index'
  import Bus from '../utils/Bus'
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

      let _this = this
      Bus.$on('clearShopCar', function () {
        _this.foodList.forEach((o) => {
          o.count = 0
        })
      });
      this.getFood(0)

    },
    methods: {
      getFood(page) {
        var _this = this;
        let url = `${this.$baseUrl}/food`;

        let categoryId = this.categoryId || ''
        let name = this.$route.query.name || ''

        let params = {
          page: page,
          size: 10,
          category_id: categoryId,
          name
        }

        this.$ajax(url, {
          params: params
        }).then((res) => {
          if (res.data.code == 0) {
            const {dataList} = res.data
            dataList.forEach((o) => {
              o.image = this.$imageUrl + o.image
              o.count = 0
            })
            this.upDateList(dataList)
          }
        })
      },
      upDateShopCar(list){
        store.commit('upDateShopCar', list)
      },
      upDateList(list = this.foodList){
        if(store.state.shopCarList.length > 0){

          store.state.shopCarList.forEach(o => {
            list.forEach(p => {
              if(p.id == o.id){
                p.count = o.count
              }
            })
          })
        }
        this.foodList = list
      }
    },
    watch:{
      foodList:{
        handler(val, oldVal){
          if(this.foodList.length > 0){
            this.upDateShopCar(this.foodList)
          }
        },
        deep:true
      }
    }

  }
</script>

<style scoped>

  .price {
    font-weight: bold;
    color: #f00;
  }

  .old-price {
    color: #666666;
    text-decoration: line-through;
    font-size: 12px;
    padding-left: 3px;
  }

</style>
