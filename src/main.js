import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.component("about-tab", {
  template: "<div>About me</div>"
});

Vue.component("profile-tab", {
  template: "<div>My profile</div>"
});

Vue.component("photos-tab", {
  template: "<div>My photos</div>"
});

new Vue({
  render: (h) => h(App)
}).$mount("#app");
