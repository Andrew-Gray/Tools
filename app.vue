<script setup>
	import { Toaster } from "@/components/ui/sonner";
</script>

<template>
	<Menu />
	<main class="relative flex min-h-dvh items-start justify-center bg-neutral-200 px-4 pb-4 pt-[calc(64px+2rem)] dark:bg-zinc-900">
		<NuxtPage />
	</main>
	<Footer />
	<Toaster />
</template>
