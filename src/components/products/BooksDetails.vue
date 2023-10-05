<template>
    <v-container class="pad">
        <v-row v-if="book">
            <v-col sm="12" md="6">
                <div class="image">
                    <v-img :src="book.cover_image" class="usma "></v-img>
                </div>

            </v-col>
            <v-col sm="12" md="6">
                <v-card class="custom-card">
                    <v-card-title class="custom-card-title">
                        <h3>{{ book.title }}</h3>
                    </v-card-title>
                    <v-card-subtitle class="custom-card-subtitle">
                        <v-icon color="primary">mdi-account</v-icon> {{ book.author }}
                    </v-card-subtitle>
                    <v-card-subtitle class="custom-card-subtitle">
                        <v-icon color="accent">mdi-currency-usd</v-icon> ${{ book.price }}
                    </v-card-subtitle>
                    <v-card-text class="custom-card-text">
                        {{ book.description }}
                    </v-card-text>
                    <v-card-actions>


                        <v-btn color="blue-lighten-2" variant="text" @click="addToCart(book)">

                            ADD Cart

                        </v-btn>

                        <v-btn class="custom-btn" color="accent">Favorite</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <Reviews />
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <GetDetails />
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
import Reviews from './Reviews.vue';
import GetDetails from './GetDetails.vue';
import ApiServices from '@/services/Api';
export default {
    components: {
        Reviews,
        GetDetails
    },
    data() {
        return {
            book: null,
            error: null,
        };
    },
    async created() {
       ApiServices.BookDetails()

    },
    methods: {
        addToCart(book) {

            const cart = JSON.parse(localStorage.getItem("cart")) || [];

            const existingProduct = cart.find((item) => item.id === book.id);

            if (existingProduct) {

                existingProduct.quantity++;

            } else {

                cart.push({ ...book, quantity: 1 });

            }

            localStorage.setItem("cart", JSON.stringify(cart));

            this.$router.push("/cart");

        },
    }

};
</script>
<style>
.pad {
    padding: 20px 100px !important;
}

.image {
    height: 400px;
    width: 100%;
    box-shadow: 3px 3px 3px 3px rgb(67, 65, 65);
}

.usma {
    width: 100%;
    height: 100%;
}

.dd {
    text-align: center;
}

/* Custom styles for the card and its elements */
.custom-card {
    max-width: 400px;
    margin: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
}

.custom-card-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 5px;
    color: #333;
}

.custom-card-subtitle {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 5px;
}

.custom-card-text {
    font-size: 1rem;
    color: #777;
    margin-bottom: 10px;
}

.custom-btn {
    margin-right: 10px;
}

.custom-card {
    max-width: 400px;
    margin: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
}

.custom-card-image {
    object-fit: cover;
}

.custom-card-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 5px;
    color: #333;
}

.custom-card-subtitle {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 5px;
}

.custom-card-text {
    font-size: 1rem;
    color: #777;
    margin-bottom: 10px;
}

.custom-btn {
    margin-right: 10px;
}
</style>