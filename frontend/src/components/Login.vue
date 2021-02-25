<template>

    <div class="wrapper">
        <div class="update">
            <form @submit.prevent="updateUser">
                <input v-model="editUser.email" type="email" placeholder="email">
                <input v-model="editUser.password" type="text" placeholder="password">
                <input v-model="editUser.name" type="text" placeholder="name">
                <input v-model="editUser.address.street" type="text" placeholder="street">
                <input v-model="editUser.address.zip" type="text" placeholder="zip">
                <input v-model="editUser.address.city" type="text" placeholder="city">
                <button>Uppdatera</button>
            </form>
        </div>
        <div class="reg">
            <form @submit.prevent="registerUser">
                <input v-model="newUser.email" type="email" placeholder="email">
                <input v-model="newUser.password" type="text" placeholder="password">
                <input v-model="newUser.name" type="text" placeholder="name">
                <input v-model="newUser.address.street" type="text" placeholder="street">
                <input v-model="newUser.address.zip" type="text" placeholder="zip">
                <input v-model="newUser.address.city" type="text" placeholder="city">
                <button>Registrera</button>
            </form>
        </div>
        <div class="login">
            <form @submit.prevent="submit">
                <input v-model="email" type="email" placeholder="email">
                <input v-model="password" type="password" placeholder="password">
                <button>Logga in</button>
            </form>
        </div>
        
        <div class="me">
            <button @click="who">Who am I</button>
            <button @click="signOut">Logga ut</button>
        </div>
    </div>

</template>

<script>
export default {

    data(){return{
        email: '',
        password: '',

        userToken: '',

        newUser: {
            email: '',
            password: '',
            name: '',
            address: {
                street: '',
                zip: '',
                city: '',
            }
        },
        editUser: {
            email: '',
            password: '',
            name: '',
            address: {
                street: '',
                zip: '',
                city: '',
            }
        }
    }},

    methods: {
        submit(){
            const payload = {email: this.email, password: this.password}
            this.$store.dispatch('signIn', payload)
        },

        who(){
            this.$store.dispatch('getUser')
        },

        registerUser(){
            const payload = this.newUser
            this.$store.dispatch('registerUser', payload)
        },

        updateUser(){
            const payload = this.editUser
            this.$store.dispatch('updateUser', payload)
        },

        async signOut(){
            if(this.userToken != ''){
                this.userToken = ''
            }
        }

    }
}
</script>

<style scoped>

.wrapper{
    display: flex;
    flex-direction: column;
}

.reg>form, .login>form, .update>form{
    display: flex;
    flex-direction: column;
    margin-bottom: 3em;
}

.me>button{
    margin-right: 2em;
}


</style>