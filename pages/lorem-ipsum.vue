<script setup>
	import { Button } from "@/components/ui/button";
	import { Label } from "@/components/ui/label";
	import { Input } from "@/components/ui/input";
	import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
	import { ref } from "vue";
	import { LoremIpsum } from "lorem-ipsum";

	const results = ref(null);

	const plainResults = ref("");
	const htmlResults = ref("");

	const count = ref(5);
	const unit = ref("P");
	const unitOptions = [
		{
			text: "Words",
			value: "W"
		},
		{
			text: "Sentences",
			value: "S"
		},
		{
			text: "Paragraphs",
			value: "P"
		}
	];

	const generationOptions = {
		format: "plain",
		sentencesPerParagraph: {
			max: 8,
			min: 4
		},
		wordsPerSentence: {
			max: 16,
			min: 4
		}
	};

	const countLabel = computed(() => {
		if (unit.value == "W") return "words";
		if (unit.value == "S") return "sentences";
		if (unit.value == "P") return "paragraphs";
	});

	const generate = () => {
		if (count.value > 100) count.value = 100;
		if (count.value < 1) count.value = 1;

		const lorem = new LoremIpsum(generationOptions);
		plainResults.value = "";
		htmlResults.value = "";

		switch (unit.value) {
			case "W":
				const words = lorem.generateWords(count.value);
				plainResults.value = words;
				htmlResults.value = words;
				break;
			case "S":
				const sentences = lorem.generateSentences(count.value);
				plainResults.value = sentences;
				htmlResults.value = sentences;
				break;
			case "P":
				for (let i = 0; i < count.value; i++) {
					const paragraph = lorem.generateParagraphs(1);
					plainResults.value += `${paragraph} \n\n`;
					htmlResults.value += `<p class="pb-4">${paragraph}</p>`;
				}
				break;
			default:
				break;
		}

		results.value.innerHTML = htmlResults.value;
	};

	const copy = () => {
		if (fns.isNullOrEmpty(plainResults.value)) return;
		fns.copyToClipboard(plainResults.value, "Text Copied to clipboard");
	};
</script>

<template>
	<Card class="w-full max-w-3xl">
		<CardHeader>
			<CardTitle>Lorem Ipsum Generator</CardTitle>
			<!-- <CardDescription>Card Description</CardDescription> -->
		</CardHeader>
		<CardContent class="flex flex-col gap-4">
			<SelectInput
				v-model="unit"
				:options="unitOptions"
				name="units"
				label="Select units" />

			<Label for="count">How many {{ countLabel }} would you like? (Max 100)</Label>
			<Input
				v-model="count"
				id="count"
				:min="1"
				:max="100"
				type="number" />

			<Button @click="generate">Generate</Button>

			<div
				ref="results"
				class="block"></div>
		</CardContent>
		<CardFooter class="flex w-full justify-end gap-4">
			<Button
				v-if="plainResults"
				@click="copy"
				>Copy</Button
			>
		</CardFooter>
	</Card>
</template>

<style lang="scss" scoped></style>
