import Vue from 'vue'
import App from './component/app.vue';
import store from './store';
import router from './route';
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAuth from '@websanova/vue-auth'

import VueMaterial from 'vue-material'
import '../node_modules/vue-material/dist/vue-material.css';

Vue.use(VueMaterial)
Vue.router = router

Vue.config.devtools = true
new Vue({
	el: '#app',
	store: store,
	router: router,
	render: render => render(App)
})