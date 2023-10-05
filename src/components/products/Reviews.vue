
<template>
    <div>
        <h2>Book Details</h2>

        <div>
            <v-rating v-model="newRating" label="Your Rating" background-color="yellow"></v-rating>
        </div>
        <div>
            <h3>Add Review</h3>
            <v-textarea v-model="newReview" label="Your Review"></v-textarea>
            <v-btn @click="postReview" color="primary">Submit Review</v-btn>
        </div>
    </div>
</template>
  
<script>
import ApiServices from "@/services/Api";

export default {
    data() {
        return {
            bookDetails: {},
            newReview: "",
            newRating: 0,
        };
    },
    methods: {

       postRating(){
        ApiServices.postRating()
       },
          postRating(){
               ApiServices.postRating()
          }
    }
}
</script>
  