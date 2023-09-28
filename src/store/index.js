import { createStore } from "vuex";
import login from "./auth/login.module.js";
import register from "./auth/register.module.js";
const BASE_URL = "http://10.0.10.220:8080/api";


export default createStore({
  modules: {
    login,
    register,
  },
});
