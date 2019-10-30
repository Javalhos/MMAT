/* eslint-disable no-console */
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import './assets/sass/app.scss'

import App from './App.vue'
import { router } from './routes'
import { store } from './store'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)

UIkit.use(Icons)

const main = async () => {
  
  const app = new Vue({
    render: h => h(App),
    store,
    router
  })
  app.$mount('#app')
}

main().catch(console.error)
