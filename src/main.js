import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueDisqus from 'vue-disqus'

import 'normalize.css'

Vue.use(VueDisqus)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')