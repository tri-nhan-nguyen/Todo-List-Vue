<template>
  <v-navigation-drawer
    v-model="drawerProps.model"
    :permanent="drawerProps.type === 'permanent'"
    :temporary="drawerProps.type === 'temporary'"
    :clipped="drawerProps.clipped"
    :floating="drawerProps.floating"
    app
  >
    <v-btn flat large block>
      <router-link class="nav-link" to="/">Home</router-link>
    </v-btn>
    <v-btn flat large block>
      <router-link class="nav-link" to="/about">About</router-link>
    </v-btn>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavigationDrawer",
  props: ["drawerProps"]
};
</script>

<style lang="scss" scoped>
.nav-link {
  text-decoration: none;
}
</style>
