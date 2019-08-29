import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/views/HomePage.vue";
import AboutPage from "@/views/AboutPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import SignUpPage from "@/views/SignUpPage.vue";
import firebase from "firebase"

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      redirect: "/login"
    },
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/home-page",
      name: "home-page",
      component: HomePage,
      meta: {
        requiresAuth: true
      }
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

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('home-page')
  else next()
})

export default router;