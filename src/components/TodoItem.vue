<template>
  <div class="todo-item">
    <v-checkbox
      v-on:change="markComplete"
      color="red darken-1"
      class="d-inline-block"
    ></v-checkbox>
    <h1
      v-bind:class="{ completed: todo.completed }"
      class="d-inline-block ma-3"
    >
      {{ todo.title }}
    </h1>
    <v-icon @click="$emit('del-todo', todo.id)" left medium color="red darken-1"
      >remove_circle</v-icon
    >
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
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