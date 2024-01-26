<template>
	<div class="absolute flex h-svh flex-col justify-center">
		<ul class="flex flex-col items-start justify-center gap-4">
			<li>
				<a
					href="#"
					role="presentation"
					class="btn btn-ghost no-animation"
					ref="defaultEle">
					idx[0]
				</a>
			</li>
			<li>
				<RouterLink
					class="btn btn-ghost"
					to="/">
					Home
				</RouterLink>
			</li>
			<li>
				<RouterLink
					class="btn btn-ghost"
					to="/uuid"
					@click="hide()">
					Uuid Generator
				</RouterLink>
			</li>
			<li>
				<RouterLink
					class="btn btn-ghost"
					to="/textTransform"
					@click="hide()">
					Text Transform
				</RouterLink>
			</li>
			<li>
				<RouterLink
					class="btn btn-ghost"
					to="/urlEncodeDecode"
					@click="hide()">
					Url Encode/Decode
				</RouterLink>
			</li>
			<li>
				<RouterLink
					class="btn btn-ghost"
					to="/colorConverter"
					@click="hide()">
					Color Converter
				</RouterLink>
			</li>
			<li>
				<RouterLink
					class="btn btn-ghost"
					to="/passwordGenerator"
					@click="hide()">
					Password Generator
				</RouterLink>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		},
		mounted() {},
		methods: {
			// hide() {
			//   //console.log(this.$refs.toolsBtn);
			//   this.$refs.defaultEle.focus();
			// }
		}
	};
</script>

<style lang="scss" scoped></style>
