import Vue from "vue";
import App from "@/App.vue";
import "@/plugins/vuetify";
import "@/plugins/vuefire";
import router from "@/plugins/router";
import firebase from "firebase";

Vue.config.productionTip = false;
let app = "";

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});
