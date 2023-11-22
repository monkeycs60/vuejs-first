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
		name: 'contact',
		component: () => import('./views/Contact.vue'),
	},
	{
		path: '/contact/:id',
		name: 'contactPerson',
		component: () => import('./views/ContactPerson.vue'),
        props: true,
	},
    {
        path: '*',
        name: 'notFound',
        component: () => import('./views/NotFound.vue'),
    }
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
