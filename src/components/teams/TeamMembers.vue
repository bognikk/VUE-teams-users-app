<template>
	<section>
		<h2>{{ teamName }}</h2>
		<ul>
			<user-item
				v-for="member in members"
				:key="member.id"
				:name="member.fullName"
				:role="member.role"
			></user-item>
		</ul>
		<router-link to="/teams/t2">Go to Team 2</router-link>
	</section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
	inject: ['teams', 'users'],
	props: ['teamId'],
	components: {
		UserItem,
	},
	data() {
		return {
			// teamName: 'Test',
			// members: [
			// 	{ id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
			// 	{ id: 'u2', fullName: 'Max Schwarz', role: 'Engineer' },
			// ],
			teamName: '',
			members: [],
		};
	},
	methods: {
		loadTeamMembers(teamId) {
			// this.$route.path; // /temas/t1
			// const teamId = teamId.params.teamId;
			const selectedTeam = this.teams.find((team) => team.id === teamId);
			const members = selectedTeam.members;
			const selectedMembers = [];
			for (const member of members) {
				const selectedUser = this.users.find((user) => user.id === member);
				selectedMembers.push(selectedUser);
			}
			this.members = selectedMembers;
			this.teamName = selectedTeam.name;
		},
	},
	created() {
		this.loadTeamMembers(this.teamId);
		console.log(this.$route.query);
	},
	beforeRouteUpdate(to, from, next) {
		console.log('TeamMembers Component beforeRouteUpdate');
		console.log(to, from);
		// this.loadTeamMembers(to.params.teamId);
		next();
	},
	watch: {
		teamId(newId) {
			this.loadTeamMembers(newId);
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../../styles/mixins.scss';

section {
	@include card-styles;
	max-width: 40rem;
	margin: 2rem auto;

	h2 {
		margin: 0.5rem 0;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	> a {
		@include button-styles(block, 100%);
	}
}
</style>