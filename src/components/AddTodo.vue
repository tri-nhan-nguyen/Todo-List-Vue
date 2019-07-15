<template>
  <form class="mx-5 px-5 my-3">
    <v-text-field
      v-model="title"
      label="Add a Todo ..."
      required
    ></v-text-field>
    <v-btn @click="add">add</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>
</template>

<script>
import uuid from "uuid";

export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    add() {
      const newTodo = {
        id: uuid.v4(),
        title: this.title,
        completed: false
      };
      // Send up to parents
      this.$emit("add-todo", newTodo);
      this.title = "";
    },
    clear() {
      this.title = "";
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
