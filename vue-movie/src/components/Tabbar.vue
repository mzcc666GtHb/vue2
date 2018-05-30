<template>
  <mt-tabbar v-model="selected" :fixed="true">
    <mt-tab-item id="index">
      首页
    </mt-tab-item>
    <mt-tab-item id="inTheaters">
      正在热映
    </mt-tab-item>
    <mt-tab-item id="comingSoon">
      即将上映
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
  export default {
    name: "Tabbar",
    data() {
      return {
        selected:this.tabId
      }
    },
    props:['tabId'],
    watch: {
      selected: function (val, oldVal) {
        this.$router.push({
          path: val
        })
      }
    }
  }
</script>

<style scoped>
  .mint-tab-item {
    padding: 16px 0;
  }
</style>
