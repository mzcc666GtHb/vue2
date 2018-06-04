import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ComingSoon from '@/components/ComingSoon'
import InTheaters from '@/components/InTheaters'
import Detail from '@/components/Detail'
import MovieList from '@/components/MovieList'
import SearchList from '@/components/SearchList'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name:'Index',
      component:Index
    },
    {
      path: '/inTheaters',
      name:'inTheaters',
      component:InTheaters
    },
    {
      path: '/comingSoon',
      name:'comingSoon',
      component:ComingSoon
    },
    {
      path: '/detail',
      name:'detail',
      component:Detail
    },
    {
      path: '/movieList',
      name:'movieList',
      component:MovieList
    },
    {
      path: '/searchList',
      name:'searchList',
      component:SearchList
    }
  ]
})
