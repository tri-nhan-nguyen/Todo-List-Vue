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
            type="email"
            v-model="email"
          ></v-text-field>

          <v-text-field
            id="password"
            label="Password"
            name="password"
            prepend-icon="lock"
            type="password"
            v-model="password"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-btn class="login-btn" color="primary" @click="login">Login</v-btn>
    </v-card>
  </v-content>
</template>

<script>
import firebase from "firebase";

export default {
  name: "LoginPage",
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    email: "",
    password: ""
  }),
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.replace("home-page");
        })
        .catch(err => {
          alert(err.code + ":" + err.message);
        });
    }
  }
};
</script>

<style scoped>
.login-page {
  width: 600px;
  margin: 120px auto;
}
</style>