<template>
	<div class="alert alert-info">
		<span>{{ message }}</span>
		<button
			class="btn btn-square btn-ghost btn-sm"
			@click="close">
			<iconX />
		</button>
	</div>
</template>

<script>
	import iconX from "@assets/X.vue";

	export default {
		components: {
			iconX
		},
		data() {
			return {
				timeout: null
			};
		},
		props: {
			message: {
				type: String,
				default: ""
			},
			id: {
				type: String,
				default: ""
			}
		},
		computed: {},
		mounted() {
			if (this.timeout) clearTimeout(this.timeout);

			this.timeout = setTimeout(() => {
				this.$emit("close", this.id);
			}, 3000);
		},
		methods: {
			close() {
				clearTimeout(this.timeout);
				this.$emit("close", this.id);
			}
		}
	};
</script>

<style lang="scss" scoped></style>
