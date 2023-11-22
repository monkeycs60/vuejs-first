<template>
	<div id="app">
		<nav>
			<ul>
				<li>
					<router-link :to="{
						name: 'home'
					}">Home</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'details' }">Details</router-link>
				</li>
				<li>
					<router-link to="/contact">Contact</router-link>
				</li>
			</ul>
		</nav>
		<router-view />
	</div>
</template>

<script>
export default {

};
</script>

<style>
nav {
	height: 200px;
	width: 100%;
	background: rgba(255, 255, 0, 0.233);
}

nav ul {
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 100%;
}
</style>
