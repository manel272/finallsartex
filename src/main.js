import Vue from 'vue'
import App from './App.vue'

import router from './router'
import '/src/image/img4.jpg'
import'/src/image/nav.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'


Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
