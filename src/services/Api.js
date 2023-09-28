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

};

export default ApiServices;
