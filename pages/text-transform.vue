<script setup>
	import { Button } from "@/components/ui/button";
	import { Textarea } from "@/components/ui/textarea";
	import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
	import { ref } from "vue";

	const textarea = ref("");
	const rowCount = 10;

	const upperCase = () => {
		textarea.value = textarea.value.toUpperCase();
	};
	const lowerCase = () => {
		textarea.value = textarea.value.toLowerCase();
	};
	const sentaceCase = () => {
		textarea.value = textarea.value.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) {
			return c.toUpperCase();
		});
	};
	const capitalizedCase = () => {
		textarea.value = textarea.value.replace(/\w\S*/g, function (txt) {
			return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
		});
	};

	const copyText = () => {
		if (fns.isNullOrEmpty(textarea.value)) return;
		fns.copyToClipboard(textarea.value, "Text copied to clipboard");
	};
	const clearText = () => {
		textarea.value = "";
	};
</script>

<template>
	<Card class="w-full max-w-3xl">
		<CardHeader>
			<CardTitle>Text Transform</CardTitle>
			<CardDescription>No data entered in this tool is stored.</CardDescription>
		</CardHeader>
		<CardContent class="flex flex-col gap-4">
			<div class="flex gap-2">
				<Button @click="upperCase">UPPERCASE</Button>
				<Button @click="lowerCase">lowercase</Button>
				<Button @click="sentaceCase">Sentence case</Button>
				<Button @click="capitalizedCase">Capitalized Case</Button>
			</div>

			<Textarea
				class="w-full"
				v-model="textarea"
				:rows="rowCount"
				autoFocus />
		</CardContent>
		<CardFooter class="flex w-full justify-end gap-4">
			<Button
				variant="outline"
				@click="clearText">
				Clear
			</Button>
			<Button @click="copyText">Copy</Button>
		</CardFooter>
	</Card>
</template>

<style lang="scss" scoped></style>
