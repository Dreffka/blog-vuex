<template>
  <div>
    <b-button id="show-btn" @click="showModal" variant="info">Edit post</b-button>

    <b-modal ref="my-modal" hide-footer title="Edit post">
    <form class="login" @submit.prevent="postEdit()">
     <b-form-input required type="text" placeholder="Title" v-model="postData.title" class="mt-2 mb-3"/>
     <b-form-input required type="text" placeholder="Description" v-model="postData.description" class="mt-3 mb-2"/>
     <b-form-textarea required placeholder="FullText"  v-model="postData.fullText" class="mt-3 mb-2"/>
     <hr/>
      <b-button class="mt-3" type="submit" variant="success" block @click="hideModal">Save</b-button>
      </form>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'EditModal',
    data(){
      return {
        postData: {},
        id: this.$route.params.postId
      }
  },
  computed: {
    ...mapGetters([
      'SINGLE_POST'
    ])
  },
  methods: {
    ...mapActions([
      'UPDATE_POST_ACTION'
    ]),

    // postEdit() {
    //   this.UPDATE_POST_ACTION(this.id, {
    //     title: this.SINGLE_POST.title,
    //     description: this.SINGLE_POST.description,
    //     fullText: this.SINGLE_POST.fullText
    //   })
    // },
    
   async postEdit() {
     await axios.patch('https://nodejs-test-api-blog.herokuapp.com/api/v1/posts/'+this.id ,  {
        title: this.postData.title,
        description: this.postData.description,
        fullText: this.postData.fullText
      })
      .then(res => {
        console.log(res)

      })
      .catch(error => {
          if(error.response) {
            console.log(error.response)
          } else if (error.request) {
            console.log(error.request)
          } else if(error.message) {
            console.log(error.message)
          }
          console.log(`ERROR: ${error}`)
          return error
            })
    },

  async showModal() {
      this.$refs['my-modal'].show()

      await axios.get('https://nodejs-test-api-blog.herokuapp.com/api/v1/posts/'+this.id)
      .then(response => {
        this.postData = response.data
        console.log(response)
      })
      .catch(error => {
          if(error.response) {
            console.log(error.response)
          } else if (error.request) {
            console.log(error.request)
          } else if(error.message) {
            console.log(error.message)
          }
          console.log(`ERROR: ${error}`)
          return error
            })
    },

    hideModal() {
      this.$refs['my-modal'].hide()
    }
  }
}
</script>