import axios from "axios";

const BASE_URL = "http://10.0.10.220:8080/api";

const ApiServices = {
  // TASK-MANAGEMENT APIs


  async login(email, password) {
    try {
      const resp = await axios.post(`${BASE_URL}/login`, {
        email: email,
        password: password,
      });
      return resp.data;
    } catch (err) {
      alert(err);
    }
  },
  async register(name, email, password, confirm_password) {
    try {
      const resp = await axios.post(`${BASE_URL}/register`, {
        name: name,
        email: email,
        password: password,
        confirm_password: confirm_password,
      });
      return resp.data;
    } catch (err) {
      alert(err);
    }
  },

  async login(email, password) {
    try {
      const resp = await axios.post(`${BASE_URL}/users/login`, {
        email: email,
        password: password,
      });
      return resp.data;
    } catch (err) {
      alert(err);
    }
  },
  async fetchUsers() {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${BASE_URL}/users`, {
        // send token
        headers: {
          // send token
          // Authorization: `Bearer ${localStorage.getItem("token")}`,
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (err) {
      alert(err);
    }
  },

  // update User
  async updateUser(id, name, email, password, confirm_password) {
    const token = localStorage.getItem("token");
    try {
      const resp = await axios.put(`${BASE_URL}/users/${id}`, {
        name: name,
        email: email,
        password: password,
        confirm_password: confirm_password,
      });
      return resp.data;
    } catch (err) {
      alert(err);
    }
  },
  async login(email, password) {
    try {
      const resp = await axios.post(`${BASE_URL}/login`, {
        email: email,
        password: password,
      });
      return resp.data;
    } catch (err) {
      alert(err);
    }
  },
  register: (name, email, password, confirm_password) => {
    return axios.post(`${BASE_URL}/register`, {
      name: name,
      email: email,
      password: password,
      confirm_password: confirm_password,
    });
  },

  async  fetchProductsFromApi() {
    try {
      const response = await axios.get(`${BASE_URL}/book`);
      return response.data.books;
    } catch (error) {
      throw error;
    }
  },

  async logout() {
    try {
      axios.post(`${BASE_URL}/logout`, null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      localStorage.removeItem("token");
      localStorage.removeItem("email");
       this.userAuthenticated = false;

      this.$router.push('/login');
    } catch (error) {
      console.error("Logout failed:", error);
    }

},

postRating() {
  // Make a POST request to add a rating
  const bookId = this.$route.params.id;// Replace with the actual book ID
  const ratingValue = this.newRating;
  axios.post(`http://10.0.10.220:8080/api/detail/${bookId}`, {
      rating: ratingValue, // Include the rating field within the request body
  }, {
      headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
      },
  })
      .then(() => {
          this.newRating = 0;
      })
      .catch((error) => {
          console.error("Error posting rating:", error);
      });
},

postReview() {
  // Make a POST request to add a review
  const bookId = this.$route.params.id;// Replace with the actual book ID
  const ReviewValue = this.newReview;
  axios.post(`http://10.0.10.220:8080/api/review/${bookId}`, {
      text: ReviewValue
  },
      {
          headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
              'Content-Type': 'application/json',
          },
      })
      .then(() => {
          this.postRating();
          this.newReview = "";
      })
      .catch((error) => {
          console.error("Error posting review:", error);
      });
},
userDetails(){
  const bearerToken = localStorage.getItem("token");
  
  // Make an HTTP GET request to the API with authorization header
  axios.get('http://10.0.10.220:8080/api/users', {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  })
  .then((response) => {
    // Handle the successful response and set the users data
    this.users = response.data.data;
    console.log(this.users);
  })
  .catch((error) => {
    console.error('Error fetching user data:', error);
  });
},
async addtocart(){
  let result = await axios.get(" http://10.0.10.220:8080/api/book");
  
  this.books = result.data.books;
},
BookDetails(){
  const productId = this.$route.params.id;
  console.log('Fetching data for product with ID:', productId);

  fetch(`http://10.0.10.220:8080/api/book/${productId}`)
      .then((res) => {
          if (!res.ok) {
              throw new Error('Network response was not ok');
          }
          return res.json();
      })
      .then((data) => {
          console.log(data.book);
          this.book = data.book


      })
}
  
}

export default ApiServices;
