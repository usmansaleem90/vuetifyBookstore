// cart.module.js
import ApiServices from "@/services/Api";

const state = {
  products: [],
  currentPage: 1,
  itemsPerPage: 10,
};

const mutations = {
  // Use the local mutation type here
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
};

const actions = {
  async fetchProducts({ commit }) {
    try {
      const response = await ApiServices.fetchProductsFromApi();
      commit("SET_PRODUCTS", response);
      console.log("Fetched products:", response);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },
};

const getters = {
    cartProducts: (state) => state.products,
  };

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
