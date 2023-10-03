import { createStore } from "vuex";
import login from "./auth/login.module.js";
import register from "./auth/register.module.js";
import cartModule from "./book.module.js";


export default createStore({
  modules: {
    login,
    register,
    cart: cartModule,
  },
});
