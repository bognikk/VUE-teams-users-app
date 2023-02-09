<template>
	<header>
		<nav>
			<ul>
				<li>
					<!-- <button @click="setActivePage('teams-list')">Teams</button> -->
					<router-link to="/teams">Teams</router-link>
				</li>
				<li>
					<!-- <button @click="setActivePage('users-list')">Users</button> -->
					<router-link to="/users">Users</router-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

 <script>
// export default {
// 	emits: ['set-page'],
// 	methods: {
// 		setActivePage(page) {
// 			this.$emit('set-page', page);
// 		},
// 	},
// };
</script>

<style lang="scss" scoped>
@import '../../styles/mixins.scss';

header {
	width: 100%;
	height: 5rem;
	background-color: #42b883;

	nav {
		height: 100%;
		ul {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			padding: 0;
			margin: 0;
			list-style: none;
			li {
				margin: 0 2rem;

				a {
					@include button-styles(inline-block, auto);

					&:hover,
					&:active,
					&.active-router {
						outline: 2px solid #000;
						color: #000;
						background: transparent;
					}
				}
			}
		}
	}
}
</style>