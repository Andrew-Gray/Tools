<script setup>
	import { Button } from "@/components/ui/button";
	import { Textarea } from "@/components/ui/textarea";
	import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
	import { ref } from "vue";

	const textarea = ref("");
	const rowCount = 10;

	const encode = () => {
		textarea.value = encodeURIComponent(textarea.value).replace(/'/g, "%27").replace(/"/g, "%22");
	};
	const decode = () => {
		textarea.value = decodeURIComponent(textarea.value.replace(/\+/g, " "));
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
			<CardTitle>Url Encode/Decode</CardTitle>
			<CardDescription>No data entered in this tool is stored.</CardDescription>
		</CardHeader>
		<CardContent class="flex flex-col gap-4">
			<div class="flex gap-2">
				<Button @click="encode">Encode</Button>
				<Button @click="decode">Decode</Button>
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
