<template>
	<div class="card-basic">
		<h2>Voiture Composant Reusable</h2>
		<h3>Le top pour les voitures</h3>
		<h4>Modèle en question : <slot name="model"></slot> exclusif ! </h4>
		<p
			>Lorem ipsum dolor sit amet consectetur adipisicing elit.
			Exercitationem, aspernatur. Ratione maiores dolore repellat natus ea
			sit odit non earum!</p
		>
		<slot name="description"></slot>
		<p>I love it</p>
		<button @click="emitIncrementEvent">Buy it Now</button>
	</div>
</template>

<script>
export default {
	name: 'CardBasic',
	methods: {
		emitIncrementEvent() {
			this.$emit('increment');
		},
	},
};
</script>

<style scoped>
.card-basic {
	padding: 20px;
	background-color: gray;
}
</style>
