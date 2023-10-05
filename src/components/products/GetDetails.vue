<template>
    <div>
        <h2>Book Details</h2>
        <div>
            <h3>Reviews</h3>
            <div v-for="(review, index) in bookDetails.reviews" :key="index">
                <p>{{ review.text }}</p>
                <!-- <v-rating>Rating: {{ review.rating }}</v-rating> -->
                <p>User: {{ review.user_id}}</p>
            </div>
            <div>
                <h3>Rating:</h3>
                <v-rating v-model="bookDetails.rating" background-color="yellow"></v-rating>
            </div>
        </div>
        <div>
            <h3>Rating: {{ bookDetails.rating }}</h3>
        </div>
        <div>
            <h3>Related Books</h3>
            <ul>
                <div v-for="(relatedBook, index) in bookDetails.related_books" :key="index">
                    <v-img :src="relatedBook" height="300"></v-img>
                </div>

            </ul>
        </div>
    </div>
</template>
    
<script>
import axios from "axios";

export default {
    data() {
        return {
            bookDetails: {

                rating: 0
            },
        };
    },
    created() {
        // Load book details on component creation
        this.loadBookDetails();
    },
    methods: {
        loadBookDetails() {
            // Replace 'id' with the actual book ID you want to retrieve
            const bookId = this.$route.params.id;// Replace with the actual book ID

            axios.get(`http://10.0.10.220:8080/api/bookdetail/${bookId}`)
                .then((response) => {
                    this.bookDetails = response.data.details;
                    console.log(this.bookDetails)
                })
                .catch((error) => {
                    console.error("Error fetching book details:", error);
                });
        },
    },
};
</script>
    