<template>
	<nav class="fixed left-0 top-0 z-50 flex w-full max-w-full flex-row justify-between rounded-lg bg-base-100 p-4 shadow-xl sm:left-4 sm:top-4 sm:max-w-[calc(100vw-2rem)]">
		<ul class="flex flex-row items-center gap-4">
			<li>
				<a
					href="#"
					role="presentation"
					class="btn btn-ghost no-animation cursor-auto p-0 text-xl hover:bg-transparent"
					ref="defaultEle"
					@click.prevent="">
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
				<div class="dropdown dropdown-end">
					<div
						tabindex="0"
						role="button"
						class="btn btn-ghost"
						ref="toolsBtn">
						Tools <ArrowIcon style="rotate: -90deg" />
					</div>
					<ul
						tabindex="0"
						class="menu dropdown-content z-[1] mt-5 w-52 rounded-box bg-base-100 p-2 shadow-xl">
						<li>
							<RouterLink
								to="/uuid"
								@click="hide()">
								Uuid Generator
							</RouterLink>
						</li>
						<li>
							<RouterLink
								to="/textTransform"
								@click="hide()">
								Text Transform
							</RouterLink>
						</li>
						<li>
							<RouterLink
								to="/urlEncodeDecode"
								@click="hide()">
								Url Encode/Decode
							</RouterLink>
						</li>
						<li>
							<RouterLink
								to="/passwordGenerator"
								@click="hide()">
								Password Generator
							</RouterLink>
						</li>
						<li>
							<RouterLink
								to="/qrCodeGenerator"
								@click="hide()">
								QR Code Generator
							</RouterLink>
						</li>
						<li>
							<RouterLink
								to="/loremIpsumGenerator"
								@click="hide()">
								Lorem Ipsum Generator
							</RouterLink>
						</li>
						<li>
							<RouterLink
								to="/hmacGenerator"
								@click="hide()">
								HMAC Generator
							</RouterLink>
						</li>
					</ul>
				</div>
			</li>
			<li></li>
		</ul>

		<ThemeToggle class="my-auto" />
	</nav>
</template>

<script>
	import ArrowIcon from "@assets/Arrow.vue";
	import ThemeToggle from "@components/ThemeToggle.vue";

	export default {
		components: {
			ArrowIcon,
			ThemeToggle
		},
		data() {
			return {};
		},
		mounted() {},
		methods: {
			hide() {
				this.$refs.defaultEle.focus();
			},
			showMobileMenu() {
				this.$emit("showMobileMenu");
			}
		}
	};
</script>

<style lang="scss" scoped></style>
