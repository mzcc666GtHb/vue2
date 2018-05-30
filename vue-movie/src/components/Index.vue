<template>
  <div>
    <v-header></v-header>
    <v-banner></v-banner>
    <v-panel :moviedList="source"></v-panel>
    <v-tabbar  :tabId="page"></v-tabbar>
  </div>
</template>

<script>
  import vHeader from './Header'
  import vBanner from './Banner'
  import vPanel from './MovieList'
  import vTabbar from './Tabbar'
    export default {
        name: "index",
        data () {
          return {
            page:'index',
            source:{
              url:'/api/movie/top250'
            }
          }
        },
        components:{
          vHeader,
          vBanner,
          vPanel,
          vTabbar
      }
    }
</script>

<style scoped>

</style>
