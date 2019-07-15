<template>
  <v-content id="home">
    <img alt="Vue logo" src="../assets/logo.png" width="120" class="my-3 center" />
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
    <v-btn @click="notifyToggleDark">
      Toggle Toolbar Dark
      <v-icon right>favorite</v-icon>
    </v-btn>
    <AddTodo v-on:add-todo="addTodo"></AddTodo>
  </v-content>
</template>

<script>
import Todos from "../components/Todos";
import AddTodo from "../components/AddTodo";
import axios from "axios";

export default {
  name: "Home",
  props: ["dark"],
  components: {
    Todos,
    AddTodo
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id != id);
    },
    addTodo(newTodo) {
      this.todos = [...this.todos, newTodo];
    },
    notifyToggleDark() {
      this.$emit("dark");
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

<style scoped>
.center {
  display: block;
  margin: 0 auto;
}
</style>
