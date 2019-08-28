<template>
  <v-content class="sign-up-page">
    <v-card class="elevation-12">
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title>Sign-up form</v-toolbar-title>
        <div class="flex-grow-1"></div>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field
            label="Username"
            name="sign-up"
            prepend-icon="person"
            type="text"
          ></v-text-field>

          <v-text-field
            id="password"
            label="Password"
            name="password"
            prepend-icon="lock"
            type="password"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-btn color="primary">Sign Up</v-btn>
    </v-card>
  </v-content>
</template>

<script>
export default {
  name: "SignUpPage",
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  })
};
</script>

<style scoped>
.sign-up-page {
  width: 600px;
  margin: 120px auto;
}
</style>