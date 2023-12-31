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
      title: "Products",
      icon: "mdi-office-building",
      attrs: {
        to: "/products",
        "active-class": "primary--text list-item-active",
      },
    },
    {
      title: "About",
      icon: "mdi-format-list-bulleted",
      attrs: {
        to: "/about",
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

// Conditionally show "Dashboard" item based on the email in local storage
if (localStorage.getItem("email") === "admin@gmail.com") {
  SideBarItems.items.push({
    title: "Dashboard",
    icon: "mdi-account-multiple",
    attrs: {
      to: "/dashboard",
      "active-class": "primary--text list-item-active",
    },
  });
}
