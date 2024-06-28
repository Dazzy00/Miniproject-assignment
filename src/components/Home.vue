<script >
  export default{
    data () {
      return{
        
      }
    }
  }
</script>

<template>
<div>
<v-card class="mx-auto" width="1000">
  <v-carousel>
  <v-carousel-item
    src="../images/chad-montano-MqT0asuoIcU-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="../images/victoria-shes-UC0HZdUitWY-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="../images/emanuel-ekstrom-KJOUnsGXq58-unsplash.jpg"
    cover
  ></v-carousel-item>
</v-carousel>
</v-card>
<v-card align="center">
        <v-card-item>
          <v-card-title style="color: orange;">TamuEats: Home of Sweetness!</v-card-title>
        </v-card-item>

        <v-card-text>
            Nestled in the heart of downtown, our restaurant offers a culinary journey unlike any other. From the moment you step through our doors, you're greeted with warmth and hospitality that sets the tone for a memorable dining experience.The ambiance here is nothing short of enchanting. Elegant decor, soft lighting, and thoughtful details create an inviting atmosphere perfect for intimate dinners, family gatherings, or catching up with friends over cocktails.
        </v-card-text>
      </v-card>
    </div><br/>
<div>
<v-row>
    <v-col cols="12" md="4">
      <v-card>
        <template v-slot:title>The Ambience</template>
        <template v-slot:subtitle>Ras</template>
        <template v-slot:text>The ambience of this restaurant is simply magical. From the moment you step inside, you're transported to a realm of tranquility and charm. The soft, ambient lighting casts a warm glow over elegant decor that effortlessly blends modern sophistication with cozy intimacy.</template>
      </v-card>
    </v-col>
    <v-col cols="12" md="4">
      <v-card>
        <template v-slot:title>Customer Service</template>
        <template v-slot:subtitle>Dazzy</template>
        <template v-slot:text>
The customer service at this restaurant is exceptional, surpassing all expectations with warmth and attentiveness that elevate the dining experience. From the moment you arrive, you're greeted with genuine smiles and a genuine eagerness to ensure your comfort and satisfaction.</template>
      </v-card>
    </v-col>
    <v-col cols="12" md="4">
      <v-card>
        <template v-slot:title>Delivery</template>
        <template v-slot:subtitle>Fahtma</template>
        <template v-slot:text>Firstly, the ordering process was incredibly user-friendly, with a clear and intuitive interface that made selecting dishes and adding special instructions a breeze. The menu options were extensive and well-presented, catering to a variety of tastes and dietary preferences.</template>
      </v-card>
    </v-col>
</v-row>
</div>
</template>