<template>
  <v-app id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="120" class="center" />
    <Todos v-bind:todos="todos" />
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
      ]
    };
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
