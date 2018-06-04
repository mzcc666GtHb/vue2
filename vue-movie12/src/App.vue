<template>
  <div id="app" v-cloak>
    <div class="container">
      <router-view></router-view>
    </div>
    <spinner :type="type" v-show="spinner"></spinner>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        type:'spiral',
        spinner:false
      }
    }
  }
</script>
