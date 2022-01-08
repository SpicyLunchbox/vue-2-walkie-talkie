import Vue from 'vue'
import App from './App.vue'
import { firestorePlugin } from 'vuefire'
import VueRouter from 'vue-router'
import VueCompositionApi from '@vue/composition-api'
import Home from "./components/Home"
import ChatRoom from "./components/ChatRoom"

// makes it easier to work with realtime data
Vue.use(firestorePlugin)
// standard practice would be to setup your router in a separate file
Vue.use(VueRouter)
Vue.use(VueCompositionApi)


Vue.config.productionTip = false



const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/chats/:id', component: ChatRoom, name: 'chat'}
  ]
})

// App.vue serves are the root of the component tree
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
