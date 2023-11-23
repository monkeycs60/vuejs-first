import Vue from 'vue';
import App from './App.vue';
import router from './router';


// Automatically register all components in the `ui` subfolder as global components
const requireComponent = require.context(
	// The relative path of the components folder
	'./components/ui',
	// Whether or not to look in subfolders
	true,
	// The regular expression used to match base component filenames
	/Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
	// Get the component config
	const componentConfig = requireComponent(fileName);
	// Get the PascalCase version of the component name
	const componentName = fileName
		// Remove the "./" from the beginning
		.replace(/^\.\//, '')
		// Remove the file extension from the end
		.replace(/\.\w+$/, '')
		// Split up kebabs
		.split('-')
		// Upper case
		.map((kebab) => kebab.charAt(0).toUpperCase() + kebab.slice(1))
		// Concatenated
		.join('');

	// Globally register the component
	Vue.component(
		componentName,
		// Look for the component options on `.default`, which will exist
		// if the component was exported with `export default`, otherwise
		// fall back to module's root
		componentConfig.default || componentConfig
	);
});

Vue.config.productionTip = false;

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app');
