<template>
	<router-view></router-view>
	<!-- this router-view is for all the children routs of the teams component -->
	<ul>
		<teams-item
			v-for="team in teams"
			:key="team.id"
			:id="team.id"
			:name="team.name"
			:member-count="team.members.length"
		></teams-item>
	</ul>
</template>

<script>
import TeamsItem from './TeamsItem.vue';

export default {
	components: {
		TeamsItem,
	},
	inject: ['teams'],
};
</script>

<style scoped>
ul {
	max-width: 40rem;
	padding: 0;
	margin: 2rem auto;
	list-style: none;
}
</style>