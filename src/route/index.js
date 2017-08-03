import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

export default new VueRouter({
	base: __dirname,
	routes: [
		{
			path: '*',
			redirect: '/home',
			meta: {
				auth: false
			}
		},
		...getSidebarRoutes(),
	]
});

function getSidebarRoutes(menu = [], routes = [], isBaseRouting = true) {
	if (menu.length < 1 && isBaseRouting) {
		const { sideBarItems } = require('../sidebar');
		menu = sideBarItems || [];
	}

	for (let i = 0, l = menu.length; i < l; i++) {
		const item = menu[i]
		if (item.path) {
			routes.push(item);
		}
		if (!item.component) {
			getSidebarRoutes(item.children, routes, false);
		}
	}
	return routes
}