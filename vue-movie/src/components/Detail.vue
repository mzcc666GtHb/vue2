<template>
  <div class="detail-container">
    <x-header :left-options="{backText: ''}">电影条目信息</x-header>
    <div class="detail-box">
      <h3>{{movieData.title}}</h3>
      <div class="detail-content">
        <img :src="movieData.imgUrl" alt="pic">
        <div class="movie-des">
          <div class="rating">
            评分:
            <rater v-model="movieData.rating"></rater>
          </div>
          <p class="movie-item">类型: <span>{{movieData.genres}}</span></p>
          <p class="movie-item">地区: <span>{{movieData.countries}}</span></p>
          <p class="movie-item">主演: <span>{{movieData.casts}}</span></p>
          <p class="movie-item">导演: <span>{{movieData.directors}}</span></p>
        </div>
      </div>
      <div class="summary">
        <h4>简介:</h4>
        <p>{{movieData.summary}}</p>
      </div>
    </div>
    <spinner :type="type" v-show="spinner"></spinner>
  </div>
</template>

<script>
  import { Rater ,XHeader} from 'vux'
  export default {
    name: "Detail",
    data() {
      return {
        movieId: '',
        movieData: '',
        type:'spiral',
        spinner:true
      }
    },
    components:{
      Rater,
      XHeader
    },
    methods: {
      ajax: function (id) {
        let that = this
        that.$http.get('/api/movie/subject/' + id).then(function (res) {
          let data = res.data
          console.log(data);
          let casts = []
          data.casts.forEach(function (item,index) {
            casts.push(item.name)
          })
          casts = casts.join('，')
          let movieData = {
            imgUrl:data.images.small,
            title:data.title,
            casts:casts,
            rating:data.rating.average,
            directors:data.directors[0].name,
            countries:data.countries.join('，'),
            genres:data.genres.join('，'),
            summary:data.summary
          }
          that.movieData = movieData
          that.spinner = false
        })
      }
    },
    mounted: function () {
      if (this.$route.query.id) {
        this.movieId = this.$route.query.id
        this.ajax(this.movieId)
      }
    }
  }
</script>

<style scoped>
  .detail-box h3 {
    padding: 10px 0;
  }

  .detail-box {
    padding: 0 10px;
  }
  .detail-content{
    overflow: hidden;
  }
  .detail-content img {
    float: left;
    width:100px;
    margin-right: 10px;
  }
  .movie-des {
    overflow: hidden;
  }
  .movie-item{
    margin-top: 2px;
  }
  .movie-item span{
    font-size: 14px;
    color: #666;
  }
  .rating{
    margin-bottom: 5px;
  }
  .summary{
    padding: 10px;
    font-size: 14px;
    color: #666;
  }
  .summary p{
    text-indent: 2em;
  }
</style>
