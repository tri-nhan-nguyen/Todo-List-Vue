<template>
  <v-app id="app" :dark="dark">
    <NavigationDrawer :drawer-props="drawerProps" />
    <Toolbar :drawer-props="drawerProps" />
    <router-view @dark="toggleDark" />
    <Footer></Footer>
  </v-app>
</template>

<script>
import Toolbar from "./components/layout/Toolbar";
import NavigationDrawer from "./components/layout/NavigationDrawer";
import Footer from "./components/layout/Footer";

export default {
  name: "app",
  components: {
    Toolbar,
    NavigationDrawer,
    Footer
  },
  data() {
    return {
      drawerProps: {
        model: false,
        type: "default",
        clipped: true,
        floating: false
      },
      dark: true
    };
  },
  methods: {
    toggleDark() {
      this.dark = !this.dark;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
