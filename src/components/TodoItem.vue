<template>
  <div class="todo-item" v-bind:class="{'completed':todo.completed}">
    <h1>
      <input type="checkbox" v-on:change="markComplete" />
      {{ todo.title }}
      <v-btn fab dark small color="error">
      </v-btn>
    </h1>
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