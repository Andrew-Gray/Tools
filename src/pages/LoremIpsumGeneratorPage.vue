<template>
	<Card class="w-[650px]">
		<template v-slot:header>Lorem Ipsum Generator</template>

		<template v-slot:default>
			<div class="form-control my-6 w-auto">
				<Select
					v-model="unit"
					:options="unitOptions"
					label="Select units:" />
			</div>

			<label class="form-control w-full">
				<div class="label">
					<span class="label-text">How many {{ countLabel }} would you like?</span>
				</div>
				<input
					v-model="count"
					:min="1"
					:max="100"
					type="number"
					class="input input-bordered w-full" />
				<div class="label">
					<span class="label-text text-xs">Max 100</span>
				</div>
			</label>

			<button
				class="btn btn-primary mb-6"
				@click="generate">
				Generate
			</button>
		</template>

		<template v-slot:footer>
			<div class="flex w-full flex-col">
				<div
					ref="results"
					class="block"></div>

				<button
					class="btn btn-primary ms-auto mt-4 block"
					@click="copy">
					Copy
				</button>
			</div>
		</template>
	</Card>
</template>

<script>
	import { LoremIpsum } from "lorem-ipsum";
	import Card from "@components/Card.vue";
	import Select from "@components/Select.vue";

	export default {
		components: {
			Card,
			Select
		},
		data() {
			return {
				plainResults: "",
				htmlResults: "",

				count: 5,
				unit: "P",
				unitOptions: [
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
				],

				generationOptions: {
					format: "plain",
					sentencesPerParagraph: {
						max: 8,
						min: 4
					},
					wordsPerSentence: {
						max: 16,
						min: 4
					}
				}
			};
		},
		computed: {
			countLabel() {
				if (this.unit == "W") return "words";
				if (this.unit == "S") return "sentences";
				if (this.unit == "P") return "paragraphs";
			}
		},
		mounted() {
			this.$fns.scrollToTop();
		},
		methods: {
			generate() {
				if (this.count > 100) this.count = 100;
				if (this.count < 1) this.count = 1;

				const lorem = new LoremIpsum(this.generationOptions);
				this.plainResults = "";
				this.htmlResults = "";

				switch (this.unit) {
					case "W":
						const words = lorem.generateWords(this.count);
						this.plainResults = words;
						this.htmlResults = words;
						break;
					case "S":
						const sentences = lorem.generateSentences(this.count);
						this.plainResults = sentences;
						this.htmlResults = sentences;
						break;
					case "P":
						for (let i = 0; i < this.count; i++) {
							const paragraph = lorem.generateParagraphs(1);
							this.plainResults += `${paragraph} \n\n`;
							this.htmlResults += `<p class="pb-4">${paragraph}</p>`;
						}
						break;
					default:
						break;
				}

				this.$refs.results.innerHTML = this.htmlResults;
			},
			copy() {
				if (this.$fns.isNullOrEmpty(this.plainResults)) return;
				this.$fns.copyToClipboard(this.plainResults, "Text Copied to clipboard");
			}
		}
	};
</script>

<style lang="scss" scoped></style>
