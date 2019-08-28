<template>
  <v-content class="login-page">
    <v-card class="elevation-12">
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title>Login form</v-toolbar-title>
        <div class="flex-grow-1"></div>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field
            label="Username"
            name="login"
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
      <v-btn class="login-btn" color="primary">Login</v-btn>
    </v-card>
  </v-content>
</template>

<script>
export default {
  name: "LoginPage",
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  })
};
</script>

<style scoped>
.login-page {
  width: 600px;
  margin: 120px auto;
}
</style>