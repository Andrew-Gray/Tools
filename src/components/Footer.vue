<template>
	<footer class="footer items-center bg-neutral p-4 text-neutral-content">
		<aside class="grid-flow-col items-center">
			<div class="me-4 text-2xl">idx[0]</div>
			<p>Copyright © {{ year }} - All right reserved</p>
		</aside>
		<nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
			<a
				href="https://github.com/Andrew-Gray"
				target="_blank">
				<GithubIcon
					width="24"
					height="24" />
			</a>
		</nav>
	</footer>
</template>

<script>
	import GithubIcon from "@assets/Github.vue";

	export default {
		components: {
			GithubIcon
		},
		data() {
			return {};
		},
		computed: {
			year() {
				return new Date().getFullYear();
			}
		},
		mounted() {},
		methods: {}
	};
</script>

<style lang="scss" scoped></style>
