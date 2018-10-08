import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import firebase from 'firebase'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import {router} from './routes.js'
import {store} from './store.js'

Vue.use(BootstrapVue)

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCQjsM52FNFZ-0Qg39fcnmPa9Lj93TxtFE",
  authDomain: "my-app-321.firebaseapp.com",
  databaseURL: "https://my-app-321.firebaseio.com",
  projectId: "my-app-321",
  storageBucket: "my-app-321.appspot.com",
  messagingSenderId: "703123305565"
};
firebase.initializeApp(config);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
