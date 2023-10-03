<template>
      <v-app-bar  color="black"
    >
        <v-app-bar-nav-icon @click="toggleDrawer" class="d-noneee"></v-app-bar-nav-icon>
        <v-toolbar-title>
          <img src="../../assets/logo.svg" alt="Logo" height="40" />
        </v-toolbar-title>
        <!-- <v-spacer></v-spacer> -->
        <v-list-item
          class="pl-3 d-nonee"
          v-for="item in sidebarItems"
          :key="item.title"
          v-bind="item.attrs"
          link
          >
          <v-list-item-content>
            <v-list-item-title
              class="d-nonee text-transform-none letter-space font-12 fw-500"
            >
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-btn class="bttn ml-5" @click="navigateTo('login')" color="accent">Login</v-btn>
        <v-btn class="bttns" @click="navigateTo('signup')" color="accent">Register</v-btn>
      </v-app-bar>

      <!-- Mobile and tabs screen -->
      <v-navigation-drawer app v-model="drawer" >
        <!-- Add your navigation links here -->
        <v-list flat dense>
        <v-list-item
          class="pl-3"
          v-for="item in sidebarItems"
          :key="item.title"
          v-bind="item.attrs"
          link
        >
          <v-list-item-content>
            <v-list-item-title
              class="text-transform-none letter-space font-12 fw-500"
            >
              <v-icon class="mr-3">{{ item.icon }}</v-icon>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
    </v-list>
      </v-navigation-drawer>
     
  </template>
  
  <script>
  import {SideBarItems} from "@/constant/global"
  export default {
    data() {
      return {
        drawer: false,
        sidebarItems: SideBarItems.items,

      };
    },
    methods: {
      toggleDrawer() {
        this.drawer = !this.drawer;
      },
      navigateTo(route) {
        this.$router.push('/' + route);
      },
    },
  };
  </script>
  
  <style>
  .bttn{
    background: #007bff;
  }
  
  /* Add custom styles here */
  @media (min-width: 768px) {
  /* Customize styles for tablets and larger screens */
  .d-noneee{
      visibility: hidden;
      display: none;

  }
}
@media (max-width: 768px) {
  /* Customize styles for tablets and larger screens */
  .d-nonee{
      visibility: hidden;
      display: none;
  }
}
  </style>
  