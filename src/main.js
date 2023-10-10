import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./styles/main.css"
import "./assets/font/iconfont.css"
import FrameLayer from "./components/FrameLayer.vue";

Vue.component('FrameLayer', FrameLayer);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
