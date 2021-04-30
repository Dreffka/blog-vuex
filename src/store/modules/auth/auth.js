import axios from 'axios'

export default {

    state: {
        token: null,
        user: null
    },

    getters: {
        USER(state) {
            return state.user
        },

        AUTHENTICATED(state){ 
            return state.token && state.user
        },

        TOKEN(state){
            return state.token
        }
    },

    actions: {
        async SIGN_IN ({dispatch}, credentials) {
           await axios.post('https://nodejs-test-api-blog.herokuapp.com/api/v1/auth', credentials)
            .then(res => {
                dispatch('ATTEMPT', res.data.token)
            })
        },

        async ATTEMPT ({commit}, token){
            commit('SET_TOKEN', token)
            try {
                await axios.get('https://nodejs-test-api-blog.herokuapp.com/api/v1/users/608a6d83cd8b06001540b01f', {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                })
                .then(res => {
                    commit('SET_USER', res.data)
                })
            }
            catch(e) {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            }
        },

        LOGOUT({commit}) {
            commit('SET_TOKEN', null)
            commit('SET_USER', null)
        }
    },

    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
        },

        SET_USER(state, data) {
            state.user = data
        },
    }

}