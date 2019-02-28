import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import List from './views/List.vue'
import Find from './views/Find.vue'
import store from './store'

Vue.use(Router);


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      beforeEnter: () => store.dispatch('logout')
    },
    {
      path: '/list',
      name: 'list',
      component: List,
    },
    {
      path: '/find',
      name: 'find',
      component: Find,
    }
  ]
})
