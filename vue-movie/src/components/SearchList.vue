<template>
  <div>
    <v-panel :moviedList="source"></v-panel>
  </div>

</template>

<script>
  import vPanel from './MovieList'
  export default {
    name: "SearchList",
    data () {
      return {
        source:''
      }
    },
    components: {
      vPanel
    },
    methods:{
      getParams () {
        let routerParams = this.$route.query.movieData
        this.source = {
          url:'/api/movie/search?q=' + routerParams
        }
      }
    },
    mounted: function () {
      this.getParams()
    }
  }
</script>

<style scoped>

</style>
