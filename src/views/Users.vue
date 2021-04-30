<template>
    <div class="container mt-5">
        
        <h4 v-if="users.length">Users ({{users.length}})</h4>
        <ul>
            <li v-for="user in users" :key="user._id" class="card mt-5 pl-3 pt-3">
                <p>Id: {{ user._id }}</p>
                <p>Name: {{ user.name }}</p>
                <p>Email: {{ user.email }}</p>
            </li>
        </ul>

        <b-button @click="getUsers">Get Users</b-button>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'UsersPage',
        data() {
            return {
                users: []
            }
        },
        methods: {
            async getUsers(){
                await axios.get('https://nodejs-test-api-blog.herokuapp.com/api/v1/users')
                .then(response => {
                    this.users = response.data
                })
                .catch(err => console.log(err))
            }
        }
    }
</script>