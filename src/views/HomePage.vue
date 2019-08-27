<template>
  <v-content id="home-page">
    <img
      alt="Vue logo"
      src="@/assets/logo.png"
      width="120"
      class="my-3 center"
    />
    <Todos
      :todos="todos"
      @del-todo="deleteTodo"
      @complete-todo="completeTodo"
    />
    <v-btn @click="notifyToggleDark">
      Toggle Toolbar Dark
      <v-icon right>favorite</v-icon>
    </v-btn>
    <AddTodo @add-todo="addTodo"></AddTodo>
  </v-content>
</template>

<script>
import Todos from "@/components/Todos";
import AddTodo from "@/components/AddTodo";
import db from "@/plugins/firebase";

export default {
  name: "HomePage",
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
  firestore: {
    todos: db.collection("todos")
  },
  methods: {
    completeTodo(todo) {
      db.collection("todos")
        .doc(todo.id)
        .update({
          completed: !todo.completed
        });
    },
    deleteTodo(id) {
      db.collection("todos")
        .doc(id)
        .delete();
    },
    addTodo(newTodo) {
      db.collection("todos")
        .doc(newTodo.id)
        .set(newTodo);
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
