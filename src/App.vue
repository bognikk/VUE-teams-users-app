<template>
	<!-- <the-navigation @set-page="setActivePage"></the-navigation> -->
	<the-navigation></the-navigation>
	<main>
		<router-view></router-view>
		<!-- <component :is="activePage"></component> -->
	</main>
	<router-view name="footer"></router-view>
</template>

<script>
// import TeamsList from './components/teams/TeamsList.vue';
// import UsersList from './components/users/UsersList.vue';
import TheNavigation from './components/nav/TheNavigation.vue';

export default {
	components: {
		TheNavigation,
		// TeamsList,
		// UsersList,
	},
	data() {
		return {
			// activePage: 'teams-list',
			teams: [
				{ id: 't1', name: 'Frontend Engineers', members: ['u1', 'u2'] },
				{ id: 't2', name: 'Backend Engineers', members: ['u1', 'u2', 'u3'] },
				{ id: 't3', name: 'Client Consulting', members: ['u4', 'u5'] },
			],
			users: [
				{ id: 'u1', fullName: 'Nikola Bogicevic', role: 'Engineer' },
				{ id: 'u2', fullName: 'Essie Lillian', role: 'Engineer' },
				{ id: 'u3', fullName: 'Travis Peredur', role: 'Engineer' },
				{ id: 'u4', fullName: 'Coleen Leilah', role: 'Consultant' },
				{ id: 'u5', fullName: 'Joe Smith', role: 'Consultant' },
			],
		};
	},
	provide() {
		return {
			teams: this.teams,
			users: this.users,
		};
	},
	// methods: {
	// 	setActivePage(page) {
	// 		this.activePage = page;
	// 	},
	// },
};
</script>

<style>
* {
	box-sizing: border-box;
}

html {
	font-family: sans-serif;
}

body {
	margin: 0;
}
</style>