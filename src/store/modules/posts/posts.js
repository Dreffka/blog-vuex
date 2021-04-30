import axios from "axios"

export default {
    state: {
        posts: []
    },
    getters: {
        ALL_POSTS(state) {
            return state.posts.reverse()
        }
    },
    actions: {
       async GET_POSTS_FROM_API(ctx) {
            await axios.get('https://nodejs-test-api-blog.herokuapp.com/api/v1/posts?limit=20')
            .then(posts => {
                ctx.commit('UPDATE_POSTS', posts.data)
                return posts
            })
            .catch(err => {
                console.log(err)
                return err
            })
        },

        async CREATE_POST_ACTION(ctx, credentials) {
            await axios.post('https://nodejs-test-api-blog.herokuapp.com/api/v1/posts', credentials)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
    mutations: {
        UPDATE_POSTS(state, posts) {
            state.posts = posts
        }
    }
}