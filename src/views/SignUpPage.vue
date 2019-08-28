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
      <v-btn color="primary" @click="signUp">Sign Up</v-btn>
    </v-card>
  </v-content>
</template>

<script>
import firebase from "firebase";

export default {
  name: "SignUpPage",
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    email: "",
    password: ""
  }),
  methods: {
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          function(user) {
            alert("Your account has been created!");
          },
          function(err) {
            alert("Oops." + err.message);
          }
        );
    }
  }
};
</script>

<style scoped>
.sign-up-page {
  width: 600px;
  margin: 120px auto;
}
</style>