<template>
  <div>
    <v-container>
      <v-row v-if="products && products.length > 0">
        <v-col md="3" sm="6" v-for="book in products" :key="book.id">
          <v-card class="book-card">
            <v-img :src="book.cover_image" height="250px" cover="" class="align-end text-black">
              <v-card-title class="text">Author :{{ book.author  }}</v-card-title>
            </v-img>
            <v-card-title class="title">{{ book.title }}</v-card-title>
            <v-card-subtitle class="price">${{ book.price }}</v-card-subtitle>
            <v-card-actions>
              <v-btn :to="'/products/' + book.id" class="details-button" text>
                View Details
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-else>
        <h1>No Poduct Found.......</h1>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("cart", ["products"]),
  },
  methods: {
    ...mapActions("cart", ["fetchProducts"]),
  },
  mounted() {
    console.log("Component mounted");
    this.fetchProducts()
      .then(() => {
        console.log("Data fetched successfully", this.cartProducts);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  },
};
</script>
<style scoped>
/* Add your custom styles here */
.book-card {
  margin: 10px;
  /* Add margin for spacing between cards */
  box-shadow: 0px 2px 4px 5px rgba(0, 0, 0, 0.1);
  background: black;
  /* Add a subtle box shadow */
}

.title {
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
}

.price {
  color: #e91e63;
  font-weight: bolder;
  /* Customize the price color */
}
.text{
  background-color: white !important;
}

.details-button {
  color: #2196F3;
  /* Customize the button text color */
}</style>
 