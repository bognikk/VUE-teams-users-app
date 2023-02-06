<template>
	<button @click="confirmButton">Confirm</button>
	<ul>
		<user-item
			v-for="user in users"
			:key="user.id"
			:name="user.fullName"
			:role="user.role"
		></user-item>
	</ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
	components: {
		UserItem,
	},
	inject: ['users'],
	methods: {
		confirmButton() {
			// do something and then change route
			this.$router.push('/teams');
		},
	},
};
</script>

<style lang="scss" scoped>
ul {
	max-width: 20rem;
	padding: 0;
	margin: 2rem auto;
	list-style: none;
}

button {
	display: block;
	width: 320px;
	padding: 0.5rem 1.5rem;
	margin: 1rem auto 0;
	border: 1px solid transparent;
	border-radius: 12px;
	font-weight: 700;
	color: #000;
	background-color: #42b883;
	cursor: pointer;

	&:hover,
	&:active {
		background-color: #35495e;
		color: #fff;
	}
}
</style>