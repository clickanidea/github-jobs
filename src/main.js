import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueProgressiveImage from "vue-progressive-image";
import "./assets/css/tailwind.css"
import JwPagination from 'jw-vue-pagination';


Vue.use(VueProgressiveImage);
Vue.component('jw-pagination', JwPagination);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
