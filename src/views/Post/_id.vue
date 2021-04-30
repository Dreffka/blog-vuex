<template>
    <div class="container center">
        <div class="title">
            <h2>{{SINGLE_POST.title}}</h2>
        </div>
        <div class="content">
            <p>{{SINGLE_POST.description}}</p>
            <p>{{SINGLE_POST.fullText}}</p>
            <p>Created: {{SINGLE_POST.dateCreated}}</p>
            <p>Posted: {{SINGLE_POST.postedBy}}</p>
        </div>
        <div class="d-flex mr-2 ml-2 justify-content-center" v-if="AUTHENTICATED">
        <EditModal/>
        <b-button @click="deletePost" variant="danger">
            Delete
        </b-button>
        </div>
        
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import EditModal from '@/components/EditModal'

    export default {
        name: "Single_Post",
        components: {
            EditModal
        },
        data(){
            return {
               id: this.$route.params.postId,
            }
        },
        created: function () {
            this.$store.dispatch('GET_SINGLE_POST_FROM_API', this.id)
		},
		computed: {
            ...mapGetters([
                'SINGLE_POST',
                'AUTHENTICATED'
            ])
		},

        methods: {
            ...mapActions([
                'DELETE_POST_ACTION'
            ]),

        async deletePost() {
            this.DELETE_POST_ACTION(this.id)
            this.$router.replace('/')
        }
        }
    }
</script>

<style>
    .center {
        margin: 50px auto;
        text-align: center;
    }
    .title {
        background-color: rgba(253, 244, 227, .8);
        padding: 10px 20px;
        border-radius: 5px;
    }
</style>

<style scoped>
    .center{
        background-color: rgba(253, 244, 227, .4);
        padding: 10px 20px;
        border-radius: 5px;
    }
    .content > p {
        margin: 50px auto;
        width: 90%;
    }
</style>