import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/views/HomePage.vue";
import AboutPage from "@/views/AboutPage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home-page",
      component: HomePage
    },
    {
      path: "/about",
      name: "about-page",
      component: AboutPage
    }
  ]
});
