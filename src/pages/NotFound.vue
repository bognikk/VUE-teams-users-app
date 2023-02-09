<template>
	<section>
		<h2>
			Page not found! Maybe view our
			<router-link to="/teams">Teams</router-link>?
		</h2>
	</section>
</template>

<style lang="scss" scoped>
@import '../styles/mixins.scss';

section {
	@include footer-styles;
}
</style>