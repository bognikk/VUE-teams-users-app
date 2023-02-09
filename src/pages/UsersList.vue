<template>
	<button @click="confirmButton">Confirm</button>
	<button @click="saveChanges">Save Changes</button>
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
import UserItem from '../components/users/UserItem.vue';

export default {
	components: {
		UserItem,
	},
	inject: ['users'],
	data() {
		return { changesSaved: false };
	},
	methods: {
		confirmButton() {
			// do something and then change route
			this.$router.push('/teams');
		},
		saveChanges() {
			this.changesSaved = true;
		},
	},
	beforeRouteEnter(to, from, next) {
		console.log('UsersList Component beforeRouteEnter');
		console.log(to, from);
		next();
	},
	beforeRouteLeave(to, from, next) {
		console.log('UsersList Component beforeRouteLeave');
		console.log(to, from);
		if (this.changesSaved) {
			next();
		} else {
			const userWantsToLeave = confirm(
				'Are you sure? You have unsaved changes!'
			);
			next(userWantsToLeave);
		}
	},
	unmounted() {},
};
</script>

<style lang="scss" scoped>
@import '../styles/mixins.scss';

ul {
	max-width: 40rem;
	padding: 0;
	margin: 2rem auto;
	list-style: none;
}

button {
	@include button-styles(block, 40rem);
}
</style>