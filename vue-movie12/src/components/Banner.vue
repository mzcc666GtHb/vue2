<template>
  <div class="banner">
    <swiper :list="bannerList" v-model="demo01_index" :loop="true"></swiper>
  </div>

</template>

<script>
  import {Swiper} from 'vux'

  export default {
    name: "banner",
    data() {
      return {
        movieInTheaters: '',
        bannerList: [],
        demo01_index: 0

      }
    },
    methods: {
      ajax: function () {
        let that = this
        that.$http.get('/api/movie/in_theaters').then(function (res) {
          that.movieInTheaters = res.data.subjects.slice(0, 5)
          that.movieInTheaters.forEach(function (item, index) {
            that.bannerList.push({
              url: 'javascript:',
              img: that.getImage(item.images.small),
              title: item.title + '(' + item.rating.average + '分)'
            })
          })

        })
      }

    },
    components: {
      Swiper
    },
    mounted: function () {
      this.ajax()
    }
  }
</script>

<style scoped>
  .banner{
    position: fixed;
    width: 100%;
    height: 180px;
    z-index: 100;
    top: 44px;
  }
</style>
