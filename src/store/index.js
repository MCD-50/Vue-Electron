import Vue from 'vue';
import VueX from 'vuex';

import app from './modules/app';



Vue.use(VueX)

export default new VueX.Store({
	modules: {
		app,
	},
})