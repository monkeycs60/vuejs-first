import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('./views/Home.vue'),
	},
	{
		path: '/details',
		name: 'details',
		component: () => import('./views/Details.vue'),
	},
	{
		path: '/contact',
		name: 'contactPage',
		component: () => import('./views/Contact.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
