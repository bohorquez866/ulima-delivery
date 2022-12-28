import Vue from "vue";
import VueMeta from 'vue-meta'
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import VueKonva from "vue-konva";
import VueDraggableResizable from "vue-draggable-resizable";
import "vue-draggable-resizable/dist/VueDraggableResizable.css";

import excel from 'vue-excel-export'

Vue.component("vue-draggable-resizable", VueDraggableResizable);
Vue.use(VueMeta)
Vue.use(VueKonva);
Vue.use(excel)

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");