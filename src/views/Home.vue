<template>
  <div class="home mb-5">
    <ul class="col-md-6 m-auto ">
      <li v-for="post in ALL_POSTS" :key="post._id" class="mt-4">
        <Post
          :id = post._id
          :title = post.title
          :description = post.description
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Post from '@/components/Post.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    Post
  },

  computed: {
    ...mapGetters([
      'ALL_POSTS'
    ])
  },

  methods: {
    ...mapActions([
      'GET_POSTS_FROM_API'
    ])
  },

  async updatePosts(){
    this.GET_POSTS_FROM_API
  },

  async mounted() {
   this.GET_POSTS_FROM_API()
  }
}
</script>


<style>
  li {
    list-style-type: none;
  }
</style>