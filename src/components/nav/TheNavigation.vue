<template>
	<header>
		<nav>
			<ul>
				<li>
					<button @click="setActivePage('teams-list')">Teams</button>
				</li>
				<li>
					<button @click="setActivePage('users-list')">Users</button>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
export default {
	emits: ['set-page'],
	methods: {
		setActivePage(page) {
			this.$emit('set-page', page);
		},
	},
};
</script>

<style lang="scss" scoped>
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

				button {
					display: inline-block;
					padding: 0.5rem 1.5rem;
					font: inherit;
					font-weight: 700;
					color: #000;
					border: 1px solid transparent;
					background: transparent;
					cursor: pointer;
					box-sizing: border-box;

					&:hover,
					&:active {
						outline: 2px solid #000;
						color: #000;
					}
				}
			}
		}
	}
}
</style>