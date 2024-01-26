<template>
	<Menu />
	<main class="min-h-svh pt-[calc(80px+2rem)] sm:pt-[calc(80px+4rem)]">
		<RouterView />
	</main>
	<Notifications />
	<Footer />
</template>

<script>
	import Menu from "@components/Menu.vue";
	import Notifications from "@components/Notifications.vue";
	import Footer from "@components/Footer.vue";

	export default {
		components: {
			Menu,
			Notifications,
			Footer
		},
		data() {
			return {};
		},
		beforeCreate() {
			if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
				document.querySelector("html").attributes.getNamedItem("data-theme").value = "dark";
			}
		}
	};
</script>

<style lang="scss" scoped></style>
