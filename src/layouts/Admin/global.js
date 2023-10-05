export const SideBarItems = {
  items: [
    {
      title: "Home",
      icon: "mdi-account-settings",
      attrs: {
        to: "/",
        "active-class": "primary--text list-item-active",
      },
    },
    {
      title: "User Details",
      icon: "mdi-office-building",
      attrs: {
        to: "/userdetails",
        "active-class": "primary--text list-item-active",
      },
    },
    {
      title: "Product Details",
      icon: "mdi-format-list-bulleted",
      attrs: {
        to: "/productdetails",
        "active-class": "primary--text list-item-active",
      },
    },
    {
      title: "Contact",
      icon: "mdi-account-multiple",
      attrs: {
        to: "/contact",
        "active-class": "primary--text list-item-active",
      },
    },
  ],
};