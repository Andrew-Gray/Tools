<template>
	<Card class="w-[650px]">
		<template v-slot:header>Hello and welcome!</template>

		<template v-slot:default>
			<p>Welcome to the home page of the utility app. This app is a collection of various tools that can be used to generate or transform data.</p>

			<p>No data entered on this site is collected, saved, or used for any other purposes than to deliver the results of the tools used.</p>
		</template>

		<template v-slot:footer></template>
	</Card>
</template>

<script>
	import Card from "@components/Card.vue";

	export default {
		components: {
			Card
		},
		data() {
			return {};
		},
		computed: {},
		mounted() {
			this.$fns.scrollToTop();
		},
		methods: {}
	};
</script>

<style lang="scss" scoped></style>
