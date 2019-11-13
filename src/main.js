import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import VueTouch from "vue-touch"
// import { Swipe, SwipeItem } from 'vant';

// Vue.use(Swipe).use(SwipeItem);
import vant from 'vant'
import 'vant/lib/index.css'; 
 Vue.use(vant)

//使用插件           组件名称
Vue.use(VueTouch,{name:"v-touch"})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
