import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import Rhymesaurus from '@/views/Rhymesaurus'

Vue.config.productionTip = false
export default {
  name: 'app',
  components: {

  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Rhymesaurus,
  template: '<App/>',
  components: {
    App
  }
})

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   // router,
//   template: '<App/>',
//   components: { App }
// })