// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import MintUI from 'mint-ui'
import { Spinner } from 'vux'
import  { LoadingPlugin } from 'vux'
import { Loadmore } from 'mint-ui'
import infiniteScroll from 'vue-infinite-scroll'

Vue.component('loadmore', Loadmore)
import Util from './assets/js/util.js'

import 'mint-ui/lib/style.css'
import './assets/base.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(MintUI)
Vue.use(Util)
Vue.use(LoadingPlugin)
Vue.use(infiniteScroll)

Vue.component('spinner', Spinner)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App},
  template: '<App/>'
})
