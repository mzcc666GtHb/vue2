<template>
  <div>
    <v-panel :moviedList="source"></v-panel>
    <v-tabbar :tabId="page"></v-tabbar>
  </div>

</template>

<script>
  import vTabbar from './Tabbar'
  import vPanel from './MovieList'
  export default {
    name: 'ComingSoon',
    data () {
      return {
        page:'comingSoon',
        source:{
          url:'/api/movie/coming_soon'
        }
      }
    },
    components: {
      vTabbar,
      vPanel
    }
  }
</script>

<style scoped>

</style>
