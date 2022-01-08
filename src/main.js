import Vue from 'vue'
import App from './App.vue'
import { firestorePlugin } from 'vuefire'

// makes it easier to work with realtime data
Vue.use(firestorePlugin)

Vue.config.productionTip = false

// App.vue serves are the root of the component tree
new Vue({
  render: h => h(App),
}).$mount('#app')
