<template>
  <div class="recommend">

    <yd-slider autoplay="3000">
      <yd-slider-item>
        <a href="http://www.ydcss.com">
          <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
        </a>
      </yd-slider-item>
      <yd-slider-item>
        <a href="http://www.ydcss.com">
          <img src="http://static.ydcss.com/uploads/ydui/2.jpg">
        </a>
      </yd-slider-item>
      <yd-slider-item>
        <a href="http://www.ydcss.com">
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
          <yd-spinner min="0" unit="1" v-model="item.count"></yd-spinner>
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
    store,
    created: function () {
      this.$store.commit('setTitle', '首页')
      this.$store.commit('setActiveTab', this.$route.name)
      this.getRecommend(0)
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
              o.count = 0
            })

            _this.recommendList = dataList
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
