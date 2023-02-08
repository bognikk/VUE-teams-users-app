<template>
	<li>
		<h3>{{ name }}</h3>
		<div class="team-members">{{ memberCount }} Members</div>
		<!-- <a href="#">View Members</a> -->
		<router-link :to="teamMembersLink">View Members</router-link>
	</li>
</template>

<script>
export default {
	props: ['id', 'name', 'memberCount'],
	computed: {
		teamMembersLink() {
			// return '/teams/' + this.id;
			// this.$router.push({
			// 	name: 'team-members',
			// 	params: { teamId: this.id },
			// });
			return {
				name: 'team-members',
				params: { teamId: this.id },
			};
		},
	},
};
</script>

<style lang="scss" scoped>
li {
	padding: 1rem;
	margin: 1rem 0;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	border-radius: 12px;

	h3 {
		margin: 0.5rem 0;
		font-size: 1.25rem;
	}

	.team-members {
		margin: 0.5rem 0;
	}

	a {
		display: inline-block;
		padding: 0.5rem 1.5rem;
		text-decoration: none;
		font-weight: 700;
		color: #000;
		background-color: #42b883;

		&:hover,
		&:active {
			color: #fff;
			background-color: #35495e;
		}
	}
}
</style>