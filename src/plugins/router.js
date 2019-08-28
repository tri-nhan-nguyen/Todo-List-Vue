import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/views/HomePage.vue";
import AboutPage from "@/views/AboutPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import SignUpPage from "@/views/SignUpPage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/home-page",
      name: "home-page",
      component: HomePage
    },
    {
      path: "/about",
      name: "about-page",
      component: AboutPage
    },
    {
      path: "/login",
      name: "login-page",
      component: LoginPage
    },
    {
      path: "/sign-up",
      name: "sign-up-page",
      component: SignUpPage
    }
  ]
});
