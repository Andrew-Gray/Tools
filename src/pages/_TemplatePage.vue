<template>
	<Card class="w-[650px]">
		<template v-slot:header></template>

		<template v-slot:default></template>

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
