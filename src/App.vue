<template>
  <v-app id="app" :dark="dark">
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :permanent="primaryDrawer.type === 'permanent'"
      :temporary="primaryDrawer.type === 'temporary'"
      :clipped="primaryDrawer.clipped"
      :floating="primaryDrawer.floating"
      app
    ></v-navigation-drawer>
    <v-toolbar :clipped-left="primaryDrawer.clipped" app>
      <v-toolbar-side-icon
        v-if="primaryDrawer.type !== 'permanent'"
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
      ></v-toolbar-side-icon>
      <v-toolbar-title>Vuetify</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <img alt="Vue logo" src="./assets/logo.png" width="120" class="center" />
      <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
      <v-btn @click="dark = !dark">
        Toggle Toolbar Dark
        <v-icon right>favorite</v-icon>
      </v-btn>
    </v-content>
    <v-footer app>
      <span class="px-3">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Todos from "./components/Todos.vue";

export default {
  name: "app",
  components: {
    Todos
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "Todo One",
          completed: false
        },
        {
          id: 2,
          title: "Todo Two",
          completed: false
        },
        {
          id: 3,
          title: "Todo Three",
          completed: false
        }
      ],
      primaryDrawer: {
        model: null,
        type: "default",
        clipped: true,
        floating: false
      },
      dark: true
    };
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id != id);
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

.center {
  display: block;
  margin: 0 auto;
}
</style>
