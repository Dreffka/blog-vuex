import Vue from 'vue'
import Vuex from 'vuex'
import posts from './modules/posts/posts'
import single_post from './modules/posts/single_post'
import auth from './modules/auth/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    posts,
    single_post,
    auth
  }
})
