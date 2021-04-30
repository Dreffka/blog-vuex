import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Create from '../views/Сreate.vue'
import Post from '../views/Post/_id.vue'
// import store from '../store/index'
import UsersPage from '../views/Users.vue'
import LoginModal from '../components/LoginModal.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginModal
  },
  {
    path: '/create',
    name: 'Create',
    component: Create,
    // beforeEnter: (to, from, next) => {
    //   if(store.getters['!AUTHENTICATED']) {
    //     return next(
    //       router.replace('/')
    //     )
    //   }
    // }
  },
  {
    path: '/post/:postId',
    name: 'Single_Post',
    component: Post,
    props: true
  },
  {
    path: '/users',
    name: 'UsersPage',
    component: UsersPage
  },
  { 
    path: '*', 
    component: { template: '<h1>Page not found</h1>'}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
