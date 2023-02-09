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
			// return '/teams/' + this.id + '?sort=asc';
			// this.$router.push({
			// 	name: 'team-members',
			// 	params: { teamId: this.id },
			// });
			return {
				name: 'team-members',
				params: { teamId: this.id },
				query: { sort: 'asc' },
			};
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../../styles/mixins.scss';
li {
	@include card-styles;

	h3 {
		margin: 0.5rem 0;
		font-size: 1.25rem;
	}

	.team-members {
		margin: 0.5rem 0;
	}

	a {
		@include button-styles(inline-block, auto);
		margin: 0.5rem auto 0;
	}
}
</style>