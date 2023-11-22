<template>
	<div class="car-card">
		<p>{{ car.brand }} présente</p>
		<p>Le nouveau modèle {{ car.model }}</p>
		<p>Sorti en {{ car.year }}</p>
		<button @click="incrementCounter">Ajouter</button>
		<button @click="decrementCounter">Retirer</button>
	</div>
</template>
<script>
export default {
	name: 'CarCard',
	props: {
		car: {
			type: Object,
			required: true,
		},
	},
	methods: {
		incrementCounter() {
			this.$emit('increment'); 
		},
		decrementCounter() {
			this.$emit('decrement');
		},
	},
};
</script>
<style>
.car-card {
	border: 1px solid black;
	margin: 10px;
	padding: 10px;
	background-color: aquamarine;
}
</style>
