<template>
	<div>
		<h1>Fetch Datas</h1>
		<ul>
			<li v-for="user in users" :key="user.id">
				{{ user.name }}
				{{ user.email }}
			</li>
		</ul>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	name: 'FetchDatas',
	data() {
		return {
			users: null,
		};
	},
	methods: {
		fetchUsers() {
			axios
				.get('https://jsonplaceholder.typicode.com/users')
				.then((response) => {
					this.users = response.data;
					console.table(this.users); 
				})
				.catch((error) => {
					console.error('There was an error fetching the users:', error);
				});
		},
	},
	created() {
		this.fetchUsers();
	},
};
</script>

<style scoped></style>
