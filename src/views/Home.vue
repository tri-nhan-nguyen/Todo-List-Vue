<template>
  <v-content id="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
      width="120"
      class="my-3 center"
    />
    <Todos :todos="todos" @del-todo="deleteTodo" />
    <v-btn @click="notifyToggleDark">
      Toggle Toolbar Dark
      <v-icon right>favorite</v-icon>
    </v-btn>
    <AddTodo @add-todo="addTodo"></AddTodo>
  </v-content>
</template>

<script>
import Todos from "../components/Todos";
import AddTodo from "../components/AddTodo";

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
  }
};
</script>

<style scoped>
.center {
  display: block;
  margin: 0 auto;
}
</style>
