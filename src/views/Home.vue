<template>
	<div>
		<h1>This is the home page</h1>
		<base-button>Go to contact</base-button>
		<p
			>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
			quibusdam cum quas maiores ab, perferendis neque eos a soluta natus.</p
		>
		<card-basic @increment="incrementCounter">
			<template #model>Model X</template>
			<template #description>Some description here.</template>
		</card-basic>
		<span> {{ counter }}</span>
	</div>
</template>
<script>
export default {
	name: 'HomePage',
	data() {
		return {
			counter: 0,
		};
	},
	methods: {
		incrementCounter() {
			this.counter++;
		},
	},
};
</script>
<style>
span {
	color: red;
	background-color: whitesmoke;
    font-size: 30px;
}
</style>
