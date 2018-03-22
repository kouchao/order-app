<template>
  <div class="recommend">
      <!-- 配置slider组件 -->
      <slider style="height:150px" :pages="pages" :sliderinit="sliderinit" @slide='slide' @tap='onTap' @init='onInit'>
        <!-- 设置loading,可自定义 -->
        <div slot="loading">loading...</div>
      </slider>

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
  import slider from 'vue-concise-slider'// import slider components
  export default {
    name: "recommend",
    data() {
      return {
        recommendList: [],
        pages:[
          {
            html: '<div class="slider1">slider1</div>',
            style: {
              'background': '#1bbc9b'
            }
          },
          {
            html: '<div class="slider2">slider2</div>',
            style: {
              'background': '#4bbfc3'
            }
          },
          {
            html: '<div class="slider3">slider3</div>',
            style: {
              'background': '#7baabe'
            }
          }
        ],
        //Sliding configuration [obj]
        sliderinit: {
          currentPage: 0,
          thresholdDistance: 100,
          thresholdTime: 300,
          loop:true,
          infinite:1,
          slidesToScroll:1
        }
      }
    },
    store,
    created: function () {
      this.$store.commit('setTitle', '首页')
      this.$store.commit('setActiveTab', this.$route.name)
      this.getRecommend(0)
    },
    components: {
      slider
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
      }, slide (data) {
        console.log(data)
      },
      onTap (data) {
        console.log(data)
      },
      onInit (data) {
        console.log(data)
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
