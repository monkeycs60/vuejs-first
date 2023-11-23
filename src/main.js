import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.component('BaseButton', () => import('./components/ui/BaseButton.vue'));
Vue.component('CardBasic', () => import('./components/ui/CardBasic.vue'));

Vue.config.productionTip = false;

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app');
