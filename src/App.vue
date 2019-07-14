<template>
  <v-app id="app" :dark="dark">
    <NavigationDrawer v-bind:drawer-props="drawerProps" />
    <Toolbar v-bind:drawer-props="drawerProps" />
    <v-content>
      <img alt="Vue logo" src="./assets/logo.png" width="120" class="my-3 center" />
      <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
      <v-btn @click="dark = !dark">
        Toggle Toolbar Dark
        <v-icon right>favorite</v-icon>
      </v-btn>
      <AddTodo v-on:add-todo="addTodo"></AddTodo>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Todos from "./components/Todos";
import Toolbar from "./components/layout/Toolbar";
import NavigationDrawer from "./components/layout/NavigationDrawer";
import Footer from "./components/layout/Footer";
import AddTodo from "./components/AddTodo";
import axios from "axios";

export default {
  name: "app",
  components: {
    Todos,
    Toolbar,
    NavigationDrawer,
    Footer,
    AddTodo
  },
  data() {
    return {
      todos: [],
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
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id != id);
    },
    addTodo(newTodo) {
      this.todos = [...this.todos, newTodo];
    }
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=3")
      .then(res => (this.todos = res.data))
      .catch(err => console.log(err));
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
