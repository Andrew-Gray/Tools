<script setup>
	import { Label } from "@/components/ui/label";
	import { Switch } from "@/components/ui/switch";
	import { Button } from "@/components/ui/button";
	import { Input } from "@/components/ui/input";
	import { Textarea } from "@/components/ui/textarea";
	import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
	import { ref } from "vue";

	const count = ref(1);
	const countMin = 1;
	const countMax = 100;
	const rowCount = ref(1);

	const upperCase = ref(true);
	const hyphens = ref(true);
	const braces = ref(false);

	let textarea = ref("");

	const generateUuids = () => {
		if (count.value > 100) count.value = 100;
		if (count.value < 1) count.value = 1;

		let result = [];

		for (let i = 0; i < count.value; i++) {
			if (i === 0) {
				result.push(format(crypto.randomUUID()));
				continue;
			}

			let unique = false;

			do {
				const newUuid = format(crypto.randomUUID());

				if (!result.includes(newUuid)) {
					result.push(newUuid);
					unique = true;
				}
			} while (!unique);
		}

		rowCount.value = count.value;
		textarea.value = result.join("\n");
	};
	const format = (uuid) => {
		if (upperCase.value) uuid = uuid.toUpperCase();
		else uuid = uuid.toLowerCase();

		if (!hyphens.value) uuid = uuid.replaceAll("-", "");
		if (braces.value) uuid = `{${uuid}}`;

		return uuid;
	};

	const copyUuids = () => {
		if (fns.isNullOrEmpty(textarea.value)) return;
		const message = count.value > 1 ? "UUIDs copied to clipboard" : "UUID Copied to clipboard";
		fns.copyToClipboard(textarea.value, message);
	};

	const clearUuids = () => {
		textarea.value = "";
		rowCount.value = 1;
	};
</script>

<template>
	<Card class="w-full max-w-3xl">
		<CardHeader>
			<CardTitle>UUID Generator</CardTitle>
		</CardHeader>
		<CardContent class="flex flex-col gap-4">
			<Label for="length">How many UUIDs would you like? (Max 100)</Label>
			<Input
				id="length"
				v-model="count"
				type="number"
				:min="countMin"
				:max="countMax" />

			<div class="flex items-center space-x-2">
				<Switch
					id="uppercase"
					:checked="upperCase"
					@update:checked="upperCase = !upperCase" />
				<Label for="uppercase">UPPERCASE</Label>
			</div>
			<div class="flex items-center space-x-2">
				<Switch
					id="hyphens"
					:checked="hyphens"
					@update:checked="hyphens = !hyphens" />
				<Label for="hyphens">Hyphens -</Label>
			</div>
			<div class="flex items-center space-x-2">
				<Switch
					id="braces"
					:checked="braces"
					@update:checked="braces = !braces" />
				<Label for="braces">Braces {}</Label>
			</div>

			<Button @click="generateUuids">Generate</Button>

			<Textarea
				class="w-full"
				v-model="textarea"
				:rows="rowCount"
				readonly />
		</CardContent>
		<CardFooter class="flex w-full justify-end gap-4">
			<Button
				variant="outline"
				@click="clearUuids">
				Clear
			</Button>
			<Button @click="copyUuids">Copy</Button>
		</CardFooter>
	</Card>
</template>

<style lang="scss" scoped></style>
