<script >
import {mapActions,mapGetters} from 'vuex'
  export default{
    data () {
      return{
        
      }
    },
    methods:{
      ...mapActions([
        'removeFromCart'
      ])
    },
    computed:{
            ...mapGetters({
                cartItems:'cart',
                total:'totalCartAmount'
            })
        }
  }
</script>

<template>
  <v-card class="mx-auto" width="800">
    <v-card-text class="bg-surface-light pt-4">
        <v-card-title>
            Cart
            <v-btn color="orange" text="Checkout"></v-btn>
        </v-card-title>
        <v-row>
        <v-col cols="12" md="3"  v-for="product in cartItems" :key=product>

    <v-card class="mx-auto my-12" max-width="374">
    <v-img height="250" :src="product.itemImage" cover></v-img>
    <v-card-item>
      <v-card-title>{{product.itemName}}</v-card-title>
    </v-card-item>

    <v-card-text>
        <div class="my-4 text-subtitle-1">
            {{ product.itemPrice }}
        </div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-actions>
      <v-btn style="background-color: green;"
        color="orange"
        text="Remove"
        block
        border
        @click="removeFromCart(product)"
      ></v-btn>
    </v-card-actions>
    </v-card>
    </v-col>
    </v-row>
    </v-card-text>
    </v-card>
</template>