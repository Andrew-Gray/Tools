<template>
	<Card class="w-[650px]">
		<template v-slot:header>Url Encode/Decode</template>

		<template v-slot:default>
			<div class="my-6 flex flex-row gap-2">
				<button
					class="btn btn-primary"
					@click="encode">
					Encode
				</button>
				<button
					class="btn btn-primary"
					@click="decode">
					Decode
				</button>
			</div>
		</template>

		<template v-slot:footer>
			<textarea
				v-model="textarea"
				ref="textArea"
				autoFocus
				rows="5"
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
			encode() {
				this.textarea = encodeURIComponent(this.textarea).replace(/'/g, "%27").replace(/"/g, "%22");
				this.setFocus();
			},
			decode() {
				this.textarea = decodeURIComponent(this.textarea.replace(/\+/g, " "));
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
