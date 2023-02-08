<template>
	<li>
		<h3>{{ name }}</h3>
		<div class="role" :class="roleClass">{{ role }}</div>
	</li>
</template>

<script>
export default {
	props: ['name', 'role'],
	computed: {
		roleClass() {
			if (this.role === 'Engineer') {
				return 'role--engineer';
			}
			if (this.role === 'Consultant') {
				return 'role--consultant';
			}
			return null;
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
	}

	.role {
		display: inline-block;
		padding: 0.25rem 1rem;
		color: #252525;
		background-color: #ccc;

		&--engineer {
			color: white;
			background-color: #0290c4;
		}

		&--consultant {
			color: white;
			background-color: #d95d39;
		}
	}
}
</style>