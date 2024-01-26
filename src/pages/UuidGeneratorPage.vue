<template>
	<Card class="w-[650px]">
		<template v-slot:header>UUID Generator</template>

		<template v-slot:default>
			<label class="form-control w-full">
				<div class="label">
					<span class="label-text">How many UUIDs would you like?</span>
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

			<div class="my-6 flex flex-col">
				<div class="form-control w-auto">
					<Toggle
						v-model="upperCase"
						label="UPPERCASE" />
					<Toggle
						v-model="hyphens"
						label="Hyphens -" />
					<Toggle
						v-model="braces"
						label="Braces {}" />
				</div>
			</div>

			<button
				class="btn btn-primary mb-6"
				@click="generateUuid">
				Generate
			</button>
		</template>

		<template v-slot:footer>
			<textarea
				v-model="textarea"
				readonly
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
	import Toggle from "@components/Toggle.vue";

	export default {
		components: {
			Card,
			Toggle
		},
		data() {
			return {
				count: 1,
				upperCase: true,
				hyphens: true,
				braces: false,
				textarea: ""
			};
		},
		mounted() {
			this.$fns.scrollToTop();
		},
		methods: {
			generateUuid() {
				if (this.count > 100) this.count = 100;
				if (this.count < 1) this.count = 1;

				let result = [];

				for (let i = 0; i < this.count; i++) {
					if (i === 0) {
						result.push(this.format(crypto.randomUUID()));
						continue;
					}

					let unique = false;

					do {
						const newUuid = this.format(crypto.randomUUID());

						if (!result.includes(newUuid)) {
							result.push(newUuid);
							unique = true;
						}
					} while (!unique);
				}

				this.textarea = result.join("\n");
			},
			format(uuid) {
				if (this.upperCase) uuid = uuid.toUpperCase();
				else uuid = uuid.toLowerCase();

				if (!this.hyphens) uuid = uuid.replaceAll("-", "");
				if (this.braces) uuid = `{${uuid}}`;

				return uuid;
			},
			copy() {
				if (this.$fns.isNullOrEmpty(this.textarea)) return;
				const message = this.count > 1 ? "UUIDs copied to clipboard" : "UUID Copied to clipboard";
				this.$fns.copyToClipboard(this.textarea, message);
			},
			clear() {
				this.textarea = "";
			}
		}
	};
</script>

<style lang="scss" scoped></style>
