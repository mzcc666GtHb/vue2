<template>
  <div class="header">
    <search auto-fixed v-model="searchKey" @on-submit="submit"></search>
    <spinner :type="type" v-show="spinner"></spinner>
  </div>

</template>

<script>
  import { Search } from 'vux';
  export default {
    data() {
      return {
        searchKey: '',
        spinner:false,
        type:'spiral'
      }
    },
    methods: {
      submit() {
        let that = this
        if(!that.searchKey.trim()){
          return
        }
        that.spinner = true
        that.$router.push({
          path: '/movieList',
          name:'movieList',
          query:{
            movieData:that.searchKey
          }
        })
      }
    },
    components:{
      Search
    }
  }
</script>

<style scoped>
  .header{
    width: 100%;
    height: 44px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  }
</style>
