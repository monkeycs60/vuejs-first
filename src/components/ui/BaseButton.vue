<template>
	<button>
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'BaseButton',
};
</script>

<style scoped>
button {
	background: red;
	color: #fff;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}
</style>
