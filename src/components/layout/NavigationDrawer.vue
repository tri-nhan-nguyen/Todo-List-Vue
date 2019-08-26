<template>
  <v-navigation-drawer
    v-model="drawerProps.model"
    :width="70"
    :permanent="drawerProps.type === 'permanent'"
    :temporary="drawerProps.type === 'temporary'"
    :clipped="drawerProps.clipped"
    :floating="drawerProps.floating"
    app
  >
    <div class="my-5">
      <router-link class="nav-link my-3" to="/">
        <img
          alt="Vue logo"
          src="@/assets/logo.png"
          width="30"
        />
      </router-link>
      <router-link class="nav-link my-3" to="/about">
        <img
          alt="Vue logo"
          src="@/assets/logo.png"
          width="30"
        />
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
  display: block;
}
</style>
