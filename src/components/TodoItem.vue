<template>
  <div class="todo-item" v-bind:class="{'completed':todo.completed}">
    <h1>
      <input type="checkbox" v-on:change="markComplete" />
      {{ todo.title }}
      <v-btn @click="$emit('del-todo', todo.id)" fab dark small color="error" class="del">
        <v-icon dark>remove</v-icon>
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