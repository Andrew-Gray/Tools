<script setup>
	import { Button } from "@/components/ui/button";
	import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
	import { ref } from "vue";

	const showDqClasses = ref(true);
	const homeItem = { name: "Home", path: "/" };
	const toolItems = [
		{ name: "UUID Generator", path: "/uuid" },
		{ name: "Text Transform", path: "/text-transform" },
		{ name: "Url Encode/Decode", path: "/url-encode-decode" },
		{ name: "Password Generator", path: "/password" },
		{ name: "QR Code Generator", path: "/qr-code" },
		{ name: "Lorem Ipsum Generator", path: "/lorem-ipsum" },
		{ name: "HMAC Generator", path: "/hmac" },
		{ name: "Fake Profile Generator", path: "/fake-profile" }
	];

	const handleScroll = () => {
		showDqClasses.value = window.scrollY === 0;
	};

	onMounted(() => {
		window.addEventListener("scroll", handleScroll);
	});
</script>

<template>
	<nav
		class="fixed z-10 mx-auto flex items-center justify-between bg-card p-2 shadow-xl transition-all"
		:class="[{ 'trans w-[calc(100%-2rem)] translate-x-4 translate-y-4 rounded-lg': showDqClasses }, { 'w-full': !showDqClasses }]">
		<div>
			<Button
				as-child
				variant="ghost">
				<NuxtLink :to="homeItem.path">
					{{ homeItem.name }}
				</NuxtLink>
			</Button>
			<DropdownMenu>
				<DropdownMenuTrigger as-child>
					<Button variant="ghost">Tools <IconArrow class="ms-1 w-4 -rotate-90" /></Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem
						v-for="(item, index) in toolItems"
						:key="index">
						<NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>

		<ColorMode />
	</nav>
</template>

<style lang="scss" scoped></style>
