<template>
	<div class="card m-auto mb-8 max-w-full bg-base-100 shadow-xl">
		<div class="card-body">
			<h2 class="card-title">
				<slot name="header"></slot>
			</h2>
			<slot></slot>
			<div class="card-actions">
				<slot name="footer"></slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		},
		mounted() {},
		methods: {}
	};
</script>

<style lang="scss" scoped></style>
