<script>
import {mapActions,mapGetters} from 'vuex'
  export default{
    data () {
      return{

      }
    },
    methods:{
        ...mapActions([
            "addToCart"
        ])
        },
        computed:{
            ...mapGetters({
                stock:'stock'
            })
        },
  }
</script>
<template>
  <div>
        <v-row>
        <v-col cols="12" md="3"  v-for="product in stock" :key=product>

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
        text="Add to Cart"
        block
        border
        @click="addToCart(product)"
      ></v-btn>
    </v-card-actions>
    </v-card>
    </v-col>
    </v-row>
    </div>
</template>