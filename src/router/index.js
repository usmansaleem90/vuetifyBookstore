// Composables
import { createRouter, createWebHistory } from 'vue-router'
const isAuthenticated = () => {
  //checking if token exist in local storage
  return localStorage.getItem("token") !== null;
};

const isAdmin = () => {
  // Check if the email is the admin's email
  return localStorage.getItem("email") === "admin@gmail.com";
  ;
};


const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () =>
          import("@/pages/Home.vue"),
      },
      {
        path: "/signup",
        component: () => import("../views/SignUp.vue"),
        name: "signup",
      },
      {
        path: "/login",
        name: "Login",
        component: () => import("@/views/Login.vue"),
      },
      {
        path: "/products",
        name: "Products",
        component: () => import("../pages/Products.vue"),
      },
      {
        path: "/contact",
        name: "ContactUs",
        component: () => import("../views/ContactUs.vue"),
      },
      {
        path: '/products/:id',
        name: 'product-details',
        component: () => import("../components/products/BooksDetails.vue"), // Create and import a ProductDetails component
      },
      {
        path: '/addtocart',
        name: 'AddtoCart',
        component: () => import("../components/products/BookCart.vue"), // Create and import a ProductDetails component
      },
    ],
  },
  {
    path: "/dashboard",
    component: () => import("@/layouts/Admin/Default.vue"),
    beforeEnter: (to, from, next) => {
      if (isAdmin()) {
        next();
      } else {
        alert("You are not accessable to  the admin dashboard.");
        next({ path: "/" });
      }
    },
    children:[
      {
        path: "/userdetails",
        component: () => import("@/components/Admin/UserDetails.vue"),
      },
      {
        path: "/productdetails",
        component: () => import("@/components/Admin/ProductDetails.vue"),
      },
    ]
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
