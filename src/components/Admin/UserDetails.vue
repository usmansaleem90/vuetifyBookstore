<template>
    <div>
      <h1>User List</h1>
      <ul>
        <li v-for="user in users" :key="user.id">{{ user.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
import ApiServices from '@/services/Api';
  
  export default {
    data() {
      return {
        users: [],
      };
    },
    created() {
      // Replace 'YOUR_BEARER_TOKEN' with the actual Bearer token
      this.userDetails()
       
    },
    methods: {
      userDetails(){
          ApiServices.userDetails()
        }
    }

  };
  </script>
  