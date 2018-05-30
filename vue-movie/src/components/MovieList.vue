<template>

  <div class="movie-list-container" :class="{isSearch:isSearch,isIndex:isIndex}">
    <x-header :left-options="{backText: ''}"  v-if="isSearch">搜索结果</x-header>

    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
      <panel :header="title"  :list="list" :type="type" @on-click-item="toDetail"></panel>
    </div>


  </div>

</template>

<script>
  import { Panel ,XHeader } from 'vux'
  export default {
    components: {
      Panel,
      XHeader
    },
    data () {
      return {
        title:'',
        type: '1',
        list: [],
        total:0,
        isSearch:false,
        allLoaded:false,
        isIndex:false,
        busy:false,
        start:0,
        count:10
      }
    },
    props:['moviedList'],
    methods:{
      loadMore: function() {
        this.busy = true
        setTimeout(() => {
          this.start += 10
          this.ajax(this.moviedList)
          this.busy = false
        }, 1000)
      },
      ajax:function (source) {
        let that = this
        if(that.total<that.start){
          return
        }
        that.$vux.loading.show({
          text: 'Loading'
        })
        that.$http.get(source.url,{
          params:{
              start:that.start,
              count:that.count
          }
        }).then(function (res) {
          console.log(res);
          let subjects = res.data.subjects
          that.title = res.data.title
          that.total = res.data.total
          that.title = that.title
          subjects.forEach(function (item,index) {
            that.list.push(
              {
                src: that.getImage(item.images.small),
                title: item.title,
                desc: item.genres.join()+'('+item.year+'年)',
                movie:item.id
              }
            )
          })
          that.$vux.loading.hide()
        })

      },
      toDetail:function (item) {
        this.$router.push({path: '/detail', query:{id: item.movie}});
      }

    },
    mounted:function () {
      if(this.$route.name == 'Index'){
        this.isIndex = true
      }else{
        this.isIndex = false
      }

      if(this.$route.name == 'movieList') {
        this.isSearch = true
        this.ajax({
          url:'/api/movie/search?q=' + this.$route.query.movieData
        })
      }else{
        this.ajax(this.moviedList)
      }

    }
  }
</script>

<style scoped>
  .movie-list-container{
    padding-bottom: 40px;
    overflow: scroll;
    height: 600px;
  }
  .movie-list-container.isIndex{
    margin-top: 224px;
  }
  .vux-header{
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    width: 100%;
    height: 46px;
  }
  .isSearch{
    padding-top: 46px;
  }
</style>
