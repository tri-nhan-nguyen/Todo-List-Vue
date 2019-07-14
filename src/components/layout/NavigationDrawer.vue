<template>
  <v-navigation-drawer
    v-model="drawerProps.model"
    :permanent="drawerProps.type === 'permanent'"
    :temporary="drawerProps.type === 'temporary'"
    :clipped="drawerProps.clipped"
    :floating="drawerProps.floating"
    app
  ></v-navigation-drawer>
</template>

<script>
export default {
  name: "NavigationDrawer",
  props: ["drawerProps"],
}
</script>
