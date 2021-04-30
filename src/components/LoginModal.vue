<template>
  <div>
    <b-button id="show-btn" @click="showModal" variant="info">Login</b-button>

    <b-modal ref="my-modal" hide-footer title="Sign in">
    <form class="login" @submit.prevent="submit()">
     <b-form-input required v-model="form.email" type="text" placeholder="Email" class="mt-2 mb-3"/>
     <b-form-input required v-model="form.password" type="password" placeholder="Password" class="mt-3 mb-2"/>
     <hr/>
      <b-button class="mt-3" type="submit" variant="success" block @click="hideModal">Login</b-button>
      </form>
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'LoginModal',
    data() {
        return {
          form: {
            email: '',
            password: ''
          }
        }
    },
    methods: {
       ...mapActions([
      'SIGN_IN'
    ]),

      submit(){ 
        this.SIGN_IN(this.form)
      },

      showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      }
    }
  }
</script>