import axios from "axios"

export default {
    state: {
        post: {}
    },
    getters: {
        SINGLE_POST(state) {
            return state.post
        }
    },
    actions: {
        async GET_SINGLE_POST_FROM_API(ctx, id) {
            await axios.get('https://nodejs-test-api-blog.herokuapp.com/api/v1/posts/'+id)
            .then(post => {
                ctx.commit('UPDATE_SINGLE_POST', post.data)
                return post
            })
            .catch(err => {
                console.log(err)
                return err
            })
        },

        async UPDATE_POST_ACTION(ctx, id, credentials) {
            await axios.patch('https://nodejs-test-api-blog.herokuapp.com/api/v1/posts/'+id, credentials)
            .then(post => {
                ctx.commit('UPDATE_SINGLE_POST', post.data)
                console.log(post)
            })
            .catch(err => {
                console.log(err)
            })
          },

        async DELETE_POST_ACTION (ctx, id) {
            axios.delete('https://nodejs-test-api-blog.herokuapp.com/api/v1/posts/'+id)
            .catch(err => {
                console.log(err)
            })
        
        }
    },
    mutations: {
        UPDATE_SINGLE_POST(state, post) {
            state.post = post
        }
    }
}
