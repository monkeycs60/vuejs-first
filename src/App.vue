<template>
	<div id="app">
		<div class="hero-section">
			<div class="hero-left">
				<h1>Image de chaussettes</h1>
				<img :src="socksVariant[selectedVariant].imageSrc" alt="chaussettes" width="300" />
				<span @mouseenter="setSocksVariant('green')" :style="{
					backgroundColor: socksVariant['green'].bgColor,
				}"></span>
				<span @mouseenter="setSocksVariant('blue')" :style="{
					backgroundColor: socksVariant['blue'].bgColor,
				}"></span>
			</div>
			<div class="hero-right">
				<span>In stock : {{ howManySocksLeft }}</span>
				<button @click="decreaseSocksQuantity" :disabled="noSocksLeft" :class="{ empty: noSocksLeft }">
					Acheter
				</button>
				<button @click="resetStockQuantity">Refill</button>
				<div>
					<button @click="incrementCounter">Increment</button>
					<button @click="decrementCounter">Decrement</button>
					<span>Counter === {{ counter }} </span>
				</div>
			</div>
		</div>

		<form-card @submit-user="handleUserSubmit" :finalUser="finalUser"></form-card>


		<p v-if="finalUserExists">Final user est : {{ finalUser }} </p>

		<car-card v-for="car in carArray" :key="car.id" :car="car" @increment="incrementCounter"
			@decrement="decrementCounter"></car-card>
	</div>
</template>

<script>
export default {
	name: "App",
	data() {
		return {
			imageSrc: require("./assets/socks_blue.jpeg"),
			socksVariant: {
				green: {
					imageSrc: require("./assets/socks_green.jpeg"),
					bgColor: "green",
					quantity: 8,
					empty: false,
				},
				blue: {
					imageSrc: require("./assets/socks_blue.jpeg"),
					bgColor: "blue",
					quantity: 14,
					empty: false,
				},
			},
			stocksInStock: null,
			selectedVariant: "green",
			finalUser: {
				firstname: "jerome",
				lastname: "",
				age: null,
			},
			counter: 0,
			carArray: [
				{
					id: 1,
					brand: "Renault",
					model: "Clio",
					year: 2019,
				},
				{
					id: 2,
					brand: "Peugeot",
					model: "208",
					year: 2018,
				},
				{
					id: 3,
					brand: "Citroen",
					model: "C3",
					year: 2017,
				},
			],
		};
	},
	computed: {
		noSocksLeft() {
			return this.socksVariant[this.selectedVariant].quantity <= 0;
		},
		howManySocksLeft() {
			return this.socksVariant[this.selectedVariant].quantity;
		},
		finalUserExists() {
			return this.finalUser.firstname && this.finalUser.lastname && this.finalUser.age;
		},
	},
	methods: {
		decreaseSocksQuantity() {
			this.socksVariant[this.selectedVariant].quantity--;
		},
		setSocksVariant(variant) {
			this.selectedVariant = variant;
		},
		resetStockQuantity() {
			if (this.socksVariant[this.selectedVariant].quantity <= 0) {
				this.socksVariant[this.selectedVariant].quantity = 10;
			} else {
				alert("Il reste encore des chaussettes !");
			}
		},
		incrementCounter() {
			this.counter++;
		},
		decrementCounter() {
			this.counter--;
		},
		handleUserSubmit(user) {
			this.finalUser = user;
		},
	},
	components: {
		CarCard: () => import("./components/CarCard.vue"),
		FormCard: () => import("./components/FormCard.vue"),
	},
};
</script>

<style>
.empty {
	background-color: red;
	text-decoration: line-through;
}

.hero-section {
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 500px;
}

.hero-left {
	background-color: grey;
	padding: 20px;
	width: 66%;
	height: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	gap: 10px;
}

.hero-left span:nth-child(3) {
	color: green;
}

.hero-left span:nth-child(4) {
	color: blue;
}

.hero-left span {
	font-size: 24px;
	padding: 6px 14px;
	background-color: white;
	border-radius: 12px;
	height: 10px;
	width: 20px;
}

.hero-right {
	background-color: lightgrey;
	padding: 20px;
	display: flex;
	flex-direction: column;
	gap: 16px;
	justify-content: center;
	align-items: center;
	height: 100%;
	flex: 1;
}

.hero-right button {
	padding: 8px 24px;
	background-color: aqua;
	cursor: pointer;
}

.hero-right button:hover {
	background-color: blue;
	color: white;
}

.car-card {
	border: 1px solid black;
	margin: 10px;
	padding: 10px;
	background-color: aquamarine;
}
</style>
