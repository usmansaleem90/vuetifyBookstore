<template>
  <!-- Your main content here -->

  <!-- Footer -->
  <v-footer class="custom-footer">
    <v-container class="px-5">
      <v-row>
        <!-- Footer column 1 (for small screens) -->
        <v-col cols="12" sm="6" md="3">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </v-col>

        <!-- Footer column 2 (for small screens) -->
        <v-col cols="12" sm="6" md="3">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          
        </v-col>

        <!-- Footer column 3 (for small screens) -->
        <v-col cols="12" sm="6" md="3">
          <h3>Contact Us</h3>
          <p>Email: <i> contact@example.com</i> </p>
          <p>Phone: <i>+1 (123) 456-7890</i> </p>
          <p>Address: <i>+1 (123) 456-7890</i> </p>
        </v-col>

        <!-- Footer column 4 (for small screens) -->
        <v-col cols="12" sm="6" md="3">
          <h3>Follow Us</h3>
          <div class="social-icons">
            <a href="#"><v-icon class="hover" size="36">mdi-facebook</v-icon></a>
            <a href="#"><v-icon class="hover" size="36">mdi-twitter</v-icon></a>
            <a href="#"><v-icon class="hover" size="36">mdi-linkedin</v-icon></a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  // Your component logic here
};
</script>
<style scoped>
/* Add custom styles here */
* {
  text-decoration: none;
  color: white;
  list-style-type: none;
}

.custom-footer {
  background-color: black;
  color: #fff;
  /* padding: 20px 50px; */
}

.custom-footer h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.custom-footer p {
  font-size: 16px;
  margin: 0;
}

.custom-footer ul {
  padding: 0;
}

.custom-footer li {
  margin-bottom: 5px;
}

.social-icons a {
  margin-right: 30px; /* Add space between social icons */
  color: #fff; /* Set the icon color */
  transition: color 0.3s; /* Add a smooth transition for color changes */
}

.social-icons a .hover:hover {
  color: #007bff ; /* Change icon color on hover */
}

/* Additional style for the container (for demonstration) */
.m {
  border: 1px solid #000;
}
</style>
