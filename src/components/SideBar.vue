<template>
  <div>
    <v-list-item class="" link to="/">
      <v-img :src="logo"></v-img>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        :to="item.route"
      >
        <v-list-item-icon>
          <v-icon color="#765cf3">{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="subtitle-2">{{
            item.title
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
export default {
  name: "SideBar",
  data: () => ({
    logo: require("@/assets/Logo-Daptee.svg"),
    items: [
      { title: "Usuarios", icon: "mdi-account-group-outline", route: "/users" },
      { title: "Productos", icon: "mdi-home-city", route: "/products" },
    ],
    mini: false,
  }),
};
</script>