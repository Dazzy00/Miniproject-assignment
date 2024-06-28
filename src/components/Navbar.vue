<template>
    <v-app-bar :elevation="7" color="green">
        <template v-slot:prepend>
         <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title style="color: orange;">TamuEats</v-app-bar-title>
            <v-btn style="color: orange;" to = "/">Home</v-btn>
            <v-btn style="color: orange;" to = "Dishes">Dishes</v-btn>
            <v-btn style="color: orange;" to = "/AboutUs">About Us</v-btn>
            
            <v-btn style="color: orange;" to = "/Cart">Cart
            <v-badge color="white" :content="cart.length">
            <v-icon>mdi-store-outline</v-icon>
            </v-badge>
            </v-btn>            
        </v-app-bar>
</template>
<script>
import {mapGetters} from 'vuex'
export default{
    computed:{
        ...mapGetters({
            cart:'cart'
        })
    },
}
</script>