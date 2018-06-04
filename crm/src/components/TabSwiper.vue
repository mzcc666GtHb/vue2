<template>
  <div class="tab-container">
    <tab :line-width=2  v-model="index" bar-active-color="#f8d649" animate="false" custom-bar-width="40px">
      <tab-item
        class="vux-center"
        :selected="currentTab === item"
        v-for="(item, index) in list2"
        @click="currentTab = item"
        :key="index">
        {{item}}
      </tab-item>
    </tab>
    <swiper v-model="index" height="100px" :show-dots="false">
      <swiper-item v-for="(item, index) in list2" :key="index">
        <div class="tab-swiper vux-center">{{item}} Container</div>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import { Tab, TabItem, Sticky, Divider, Swiper, SwiperItem } from 'vux'
  const list = () => ['动态', '当前阶段', '详细信息']
  export default {
    components: {
      Tab,
      TabItem,
      Sticky,
      Divider,
      Swiper,
      SwiperItem
    },
    data () {
      return {
        index: 0,
        list2: list(),
        currentTab: '美食',
        getBarWidth: function (index) {
          return (index + 1) * 22 + 'px'
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '../assets/less/themes/crm-theme.less';
  @import '../assets/less/themes/vux-theme-config.less';
  .tab-container{
    padding: 0 10px;
  }
</style>
