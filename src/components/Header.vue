<template>
  <header>
   <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand to="/">My Blog</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item v-if="AUTHENTICATED" to="/create">Create post</b-nav-item>
        <b-nav-item to="/users">Users</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
    
      <b-navbar-nav class="ml-auto">
        <div v-if="!AUTHENTICATED">
          <LoginModal/>
        </div>
        <div v-else class="d-flex align-items-center">
          <h5 class="mr-3 mb-0">{{ USER.name }}</h5>
          <b-button @click="LOGOUT">Logout</b-button>
        </div>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </header>
</template>

<script>
import LoginModal from './LoginModal'
import { mapGetters, mapActions } from 'vuex'

  export default {
    components: {
      LoginModal
    },
    name: 'Header',
    data(){
      return{
        isLoginned: false
      }
    },
    computed: {
      ...mapGetters([
        'AUTHENTICATED',
        'USER'
      ])
    },
    methods: {
      ...mapActions([
        'LOGOUT'
      ])
    }
  }
</script>

<style>
    header{
        top: 0;
        z-index: 30;
        position: sticky;
    }
</style>