import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/main.css";

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.directive("document-click", {
  bind(el, binding) {
    console.log("----bind----");
    document.addEventListener("click", binding.value, false);
  },
  inserted() {
    console.log("----inserted---");
  },
  updated() {
    console.log("----updated---");
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
