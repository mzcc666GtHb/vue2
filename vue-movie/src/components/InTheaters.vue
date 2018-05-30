<template>
  <div class="in-theaters">
    <v-panel :moviedList="source"></v-panel>
    <v-tabbar :tabId="page"></v-tabbar>
  </div>
</template>

<script>
  import vTabbar from './Tabbar'
  import vPanel from './MovieList'
  export default {
    name: "InTheaters",
    data() {
      return {
        page:"inTheaters",
        source:{
          url:'/api/movie/in_theaters'
        }
      }
    },
    components:{
      vTabbar,
      vPanel
    }
  }
</script>

<style scoped>

</style>
