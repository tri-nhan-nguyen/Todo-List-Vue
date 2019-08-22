<template>
  <div>
    <div :key="todo.id" v-for="todo in todos">
      <TodoItem
        :todo="todo"
        @del-todo="deleteTodo"
        @complete-todo="completeTodo"
      />
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";

export default {
  name: "Todos",
  props: ["todos"],
  components: {
    TodoItem
  },
  methods: {
    completeTodo(todo) {
      this.$emit("complete-todo", todo);
    },
    deleteTodo(id) {
      this.$emit("del-todo", id);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
