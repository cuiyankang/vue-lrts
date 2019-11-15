import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import VueTouch from "vue-touch"
import "./lib/loading/index.js"
import vant from 'vant'
import 'vant/lib/index.css'; 

//使用插件  Vue.use()
Vue.use(VueTouch,{name:"v-touch"})
Vue.use(vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
