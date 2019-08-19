<template>
  <v-toolbar :clipped-left="drawerProps.clipped" app class="elevation-0">
    <v-toolbar-side-icon
      v-if="drawerProps.type !== 'permanent'"
      @click.stop="drawerProps.model = !drawerProps.model"
    ></v-toolbar-side-icon>
    <v-toolbar-title>Vuetify</v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  name: "Toolbar",
  props: ["drawerProps"]
};
</script>
