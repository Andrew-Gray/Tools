<template>
	<Card class="w-[650px]">
		<template v-slot:header>Text Transform</template>

		<template v-slot:default>
			<div class="my-6 flex flex-row gap-2">
				<button
					class="btn btn-primary"
					@click="upperCase">
					UPPERCASE
				</button>
				<button
					class="btn btn-primary"
					@click="lowerCase">
					lowercase
				</button>
				<button
					class="btn btn-primary"
					@click="sentaceCase">
					Sentence case
				</button>
				<button
					class="btn btn-primary"
					@click="capitalizedCase">
					Capitalized Case
				</button>
			</div>
		</template>

		<template v-slot:footer>
			<textarea
				v-model="textarea"
				ref="textArea"
				autoFocus
				rows="10"
				class="textarea textarea-bordered w-full" />

			<button
				class="btn btn-outline btn-primary ms-auto"
				@click="clear">
				Clear
			</button>
			<button
				class="btn btn-primary"
				@click="copy">
				Copy
			</button>
		</template>
	</Card>
</template>

<script>
	import Card from "@components/Card.vue";

	export default {
		components: {
			Card
		},
		data() {
			return {
				textarea: ""
			};
		},
		mounted() {
			this.$fns.scrollToTop();
		},
		methods: {
			upperCase() {
				this.textarea = this.textarea.toUpperCase();
				this.setFocus();
			},
			lowerCase() {
				this.textarea = this.textarea.toLowerCase();
				this.setFocus();
			},
			sentaceCase() {
				this.textarea = this.textarea.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) {
					return c.toUpperCase();
				});
				this.setFocus();
			},
			capitalizedCase() {
				this.textarea = this.textarea.replace(/\w\S*/g, function (txt) {
					return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
				});
				this.setFocus();
			},
			copy() {
				if (this.$fns.isNullOrEmpty(this.textarea)) return;
				this.$fns.copyToClipboard(this.textarea, "Text copied to clipboard");
				this.setFocus();
			},
			clear() {
				this.textarea = "";
				this.setFocus();
			},
			setFocus() {
				this.$refs.textArea.focus();
			}
		}
	};
</script>

<style lang="scss" scoped></style>
