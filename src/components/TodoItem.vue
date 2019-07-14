<template>
  <div class="todo-item" v-bind:class="{'completed':todo.completed}">
    <h1>{{ todo.title }}</h1>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"]
};
</script>

<style lang="scss" scoped>
.completed {
  color: gray;
  text-decoration: line-through;
}
</style>