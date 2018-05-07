<template>
  <div class="recommend">

    <yd-slider autoplay="3000">
      <yd-slider-item>
        <a href="http://www.ydcss.com">
          <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
        </a>
      </yd-slider-item>
      <yd-slider-item>
        <a href="javascropt:void(0);">
          <img src="http://static.ydcss.com/uploads/ydui/2.jpg">
        </a>
      </yd-slider-item>
      <yd-slider-item>
        <a href="javascropt:void(0);">
          <img src="http://static.ydcss.com/uploads/ydui/3.jpg">
        </a>
      </yd-slider-item>
    </yd-slider>


    <yd-list theme="3">
      <yd-list-item type="link" v-for="item, key in recommendList" :key="key" :href="{ name: 'details', params: { id: item.food.id }}">
        <img slot="img" :src="item.food.image">
        <span slot="title">{{item.food.name}}</span>
        <yd-list-other slot="other"  style="padding-top: 10px">
          <div>
            <span class="list-price"><em>¥</em>{{item.food.price}}</span>
            <span class="list-del-price">¥{{item.food.old_price}}</span>
          </div>
          <yd-spinner min="0" unit="1" v-model="item.food.count"></yd-spinner>
        </yd-list-other>
      </yd-list-item>
    </yd-list>
  </div>

</template>

<script>
  import store from '../store/index'
  export default {
    name: "recommend",
    data() {
      return {
        recommendList: [],
      }
    },
    created: function () {
      this.getRecommend(0)
    },
    watch:{
      recommendList:{
        handler(val, oldVal){
          if(this.recommendList.length > 0){
            this.upDateShopCar(this.recommendList)
          }

        },
        deep:true
      }
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
            const {dataList} = res.data
            dataList.forEach((o) => {
              o.food.image = _this.$imageUrl + o.food.image
              o.food.count = 0
            })

            _this.upDateRecommendList(dataList)
          }
        })
      },
      upDateShopCar(list){
        list = list.map(o => o.food)
        store.commit('upDateShopCar', list)
      },
      upDateRecommendList(list){

        if(store.state.shopCarList.length > 0){

          store.state.shopCarList.forEach(o => {
            list.forEach(p => {
              if(p.food.id == o.id){
                p.food.count = o.count
              }
            })
          })
        }
        this.recommendList = list

      }
    }
  }
</script>

<style scoped>
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

</style>
