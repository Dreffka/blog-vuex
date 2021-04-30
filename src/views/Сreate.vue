<template>
  <div class="container create">
    <h1>This is an create posts page</h1>
    <div class="form">
      <b-row class="form_center">
        <b-col sm="8">
          <b-form-input id="title" placeholder="Enter title" v-model="post.title"></b-form-input>
        </b-col>
        <b-col sm="8">
          <b-form-input id="descriptrion" placeholder="Enter description" v-model="post.description"></b-form-input>
        </b-col>
        <b-col sm="8">
          <b-form-textarea id="fulltext" placeholder="Enter post text" v-model="post.fullText"></b-form-textarea>
        </b-col>
      </b-row>
      <b-button variant="success" @click="createPost">Add new post</b-button>
    </div>
  </div>
</template>


<script>
import { mapActions } from 'vuex'

  export default {
    name: 'Create',
    data() {
      return {
        post: {
          title: '',
          fullText: '',
          description: ''
        }
      }
    },
    methods: {
      ...mapActions([
      'CREATE_POST_ACTION'
    ]),

      createPost() { 
        this.CREATE_POST_ACTION(this.post)
        this.$router.replace('/')
      }   
    },
  }
</script>

<style>
  .create {
    margin: 40px 0;
    text-align: center;
  }
  .form_center {
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

<style scoped>
  input {
    margin: 10px 0 ;
  }
</style>