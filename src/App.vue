<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      hide-overlay
      stateless
      width="300"
      disable-resize-watcher
    >
      <!--  -->
      <SideBar/>
    </v-navigation-drawer>

    <v-app-bar app height="80" elevation="1"> 
   
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <MainBar />
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    components: {
        SideBar: () => import('./components/SideBar'),
        MainBar: () => import('./components/MainBar'),
    },
    data: () => ({ drawer: true }),
  }
</script>