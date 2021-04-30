<template>
    
  <b-card 
    bg-variant="light" 
    class="post_card" 
    text-variant="Dark" 
    :title=title 
  >
  <b-card-text>
    {{ description }}
  </b-card-text>

    <div class="post_buttons">
    <b-button :to="'/post/' + id" variant="success">
        Open
    </b-button>
    
  </div>
</b-card>

    
</template>

<script>
export default {
    name: 'Post',
    props: {
        id: String,
        title: String,
        description: String
    }
}
</script>


<style>
    .post_buttons {
      display: flex;
    }
    .post_buttons > a, #show-btn{
        margin-right: 10px;
    }
</style>