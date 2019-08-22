<template>
  <div class="todo-item">
    <v-checkbox
      @change="completeTodo"
      color="red darken-1"
      class="d-inline-block ma-0"
    ></v-checkbox>
    <h2 :class="{ completed: todo.completed }" class="d-inline-block mx-3">
      {{ todo.title }}
    </h2>
    <v-icon @click="deleteTodo" medium color="red darken-1">
      remove_circle
    </v-icon>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    completeTodo() {
      this.$emit("complete-todo", this.todo);
    },
    deleteTodo() {
      this.$emit("del-todo", this.todo.id);
    }
  }
};
</script>

<style lang="scss" scoped>
.completed {
  color: gray;
  text-decoration: line-through;
}
</style>