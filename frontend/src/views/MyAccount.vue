<template>
    <div class="account-page-wrapper">
        <h1>Ditt konto</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, expedita! Molestiae nobis sit dolores. Pariatur, voluptatum fuga velit architecto nam laborum dolores sint et expedita tempora eveniet distinctio similique magni?
        </p>
        <div class="account-wrapper">
            <div class="prev-orders">
                <h3>Tidigare ordrar:</h3>
                <button v-on:click='getTheUser'>click</button>
                
                <p>{{user}}</p>
            </div>
            <div class="account-info">
                <h3>Dina uppgifter:</h3>
                <p>{{user.name}}</p>
                <p>{{user.address.street}}</p>
                <p>{{user.address.zip}} {{user.address.city}}</p>
                <p class="mail">Email: {{user.email}}</p>

                <p class="bold link">Ändra mina uppgifter</p>
            </div>
        </div>    
    </div>
    
    
</template>

<script>
export default {


computed: {
    user(){
        return this.$store.getters.getUserData
    }
},

// created() {
//     this.$store.dispatch('getUser')
// },

methods: {
    getTheUser(){
        //console.log(this.$store.state.userToken)
        //const token = this.$store.state.userToken
        this.$store.dispatch('getOrders')
    }
}

}
</script>

<style scoped>

.account-page-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3em 0;
}
.account-page-wrapper>p{
    max-width: 600px;
    line-height: 130%;
    margin-bottom: 3em;
    font-size: 20px;
}


.account-wrapper{
    width: 90vw;
    padding: 2em 2em;
    background-color: white;
    border: 1px solid black;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
}

.account-info, .prev-orders{
    display: flex;
    align-items: center;
    flex-direction: column;
    line-height: 130%;
    width: 40%;
}

.bold {
    font-weight: 700;
}

.link{
    margin-top: 2em;
    color: blue;
    cursor: pointer;
}

.link:hover{
    color: hotpink;
}

h3{
    margin-bottom: 1.5em;
    text-decoration: underline;
}

.mail{
    margin-top: 1em;
}

</style>