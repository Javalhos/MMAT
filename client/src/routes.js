import VueRouter from 'vue-router'

import MainComponent from './pages/Main'

export const router = new VueRouter({
  routes: [
    { path: '/',  component: MainComponent }
  ]
})

