<template>
	<label class="swap swap-rotate">
		<input
			type="checkbox"
			class="theme-controller"
			:checked="checked"
			:value="inputValue" />

		<SunIcon
			class="h-6 w-6 fill-current"
			:class="sunClasses" />
		<MoonIcon
			class="h-6 w-6 fill-current"
			:class="moonClasses" />
	</label>
</template>

<script>
	import SunIcon from "@assets/Sun.vue";
	import MoonIcon from "@assets/Moon.vue";

	export default {
		components: {
			SunIcon,
			MoonIcon,
			checked: false,
			theme: ""
		},
		data() {
			return {};
		},
		computed: {
			inputValue() {
				return this.theme === "cmyk" ? "dark" : "cmyk";
			},
			sunClasses() {
				return this.theme === "cmyk" ? "swap-on" : "swap-off";
			},
			moonClasses() {
				return this.theme === "cmyk" ? "swap-off" : "swap-on";
			}
		},
		created() {
			this.theme = document.querySelector("html").attributes.getNamedItem("data-theme").value;
		}
	};
</script>

<style lang="scss" scoped></style>
