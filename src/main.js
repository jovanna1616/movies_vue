import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AppMovies from  './pages/AppMovies'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: '/movies' },
  { path: '/movies', component: AppMovies },
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
