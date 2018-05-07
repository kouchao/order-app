<template>
  <div class="details">
    <img
      :src="details.image"
      alt="">
    <div class="name">
      <div>{{details.name}}</div>
      <div class="price"><span class="old-price">¥{{details.old_price}}</span>¥{{details.price}}</div>

    </div>
    <div class="count">
      <yd-spinner min="0" unit="1" v-model="details.count"></yd-spinner>
    </div>



    <div class="describe-title">菜品描述</div>
    <div class="describe over">
      {{details.describe}}
    </div>

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
    created: function () {
      if (this.$route.params.id) {
        this.id = this.$route.params.id
      }

      this.getFood(0)
    },
    watch:{
      details:{
        handler(){

            this.upDateShopCar([this.details])

        },
        deep:true
      }
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
            let details = res.data.data

            details.image = _this.$imageUrl + details.image
            details.count = 0;


            // _this.$store.commit('setTitle', _this.details.name)

            _this.upDateShopCarList(details)
          }
        })
      },
      upDateShopCar(list){
        list = list.filter(o => o.count > 0)
        store.commit('upDateShopCar', list)
      },
      upDateShopCarList(list){

        if(store.state.shopCarList.length > 0){

          store.state.shopCarList.forEach(o => {
            if(list.id == o.id){
              list.count = o.count
            }
          })
        }


        this.details = list

      }

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

  .describe-title {
    padding: 0 15px;
  }

  .price {
    font-size: 16px;
    color: #f00;
  }

  .old-price {
    color: #666666;
    text-decoration: line-through;
    font-size: 12px;
    padding-left: 3px;
    margin-right: 10px;
  }


  .details {
    background: #fff;
  }


  .count {
    padding: 10px;
    text-align: right;
  }

</style>
