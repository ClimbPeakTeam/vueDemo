// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Mint from 'mint-ui';
require('@/config/rem')
import store from '@/store/index'
import App from './App'
import router from './router'
import 'mint-ui/lib/style.css'
import * as filters from './filters' // global filters

Vue.use(Mint);

require('@/mock/index')

require('@/styles/index.scss')

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
