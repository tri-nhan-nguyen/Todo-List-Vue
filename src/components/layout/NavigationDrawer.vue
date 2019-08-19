<template>
  <v-navigation-drawer
    v-model="drawerProps.model"
    :width=250
    :permanent="drawerProps.type === 'permanent'"
    :temporary="drawerProps.type === 'temporary'"
    :clipped="drawerProps.clipped"
    :floating="drawerProps.floating"
    app
  >
    <div class="my-5">
    <router-link class="nav-link" to="/">
      <v-btn flat large block>
        Home
      </v-btn>
    </router-link>
    <router-link class="nav-link" to="/about">
      <v-btn flat large block>
        About
      </v-btn>
    </router-link>
    </div>
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
  margin: 0 3rem;
}
</style>
