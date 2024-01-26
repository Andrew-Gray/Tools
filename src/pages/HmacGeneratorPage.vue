<template>
	<Card class="w-[650px]">
		<template v-slot:header>HMAC Hash Generator</template>

		<template v-slot:default>
			<div class="block text-xs">Content and Secret are not stored and is only used to generate the HMAC hash.</div>

			<label class="form-control w-full">
				<div class="label">
					<span class="label-text">Content: </span>
				</div>
				<textarea
					v-model="content"
					rows="5"
					class="textarea textarea-bordered w-full" />
			</label>

			<label class="form-control w-full">
				<div class="label">
					<span class="label-text">Secret: </span>
				</div>
				<input
					v-model="secret"
					type="text"
					class="input input-bordered w-full" />
			</label>

			<div class="form-control my-6 w-auto">
				<Select
					v-model="hashFunction"
					:options="hashFunctionOptions"
					label="Hash Algorithms: " />
			</div>

			<div class="form-control my-6 w-auto">
				<span class="label-text">Output Format: </span>
				<Radio
					v-model="outputType"
					value="BASE64"
					name="outputType"
					label="Base64: " />
				<Radio
					v-model="outputType"
					value="HEX"
					name="outputType"
					label="Hex: " />
			</div>

			<button
				class="btn btn-primary my-6"
				@click="generate">
				Generate HMAC Hash
			</button>
		</template>

		<template v-slot:footer>
			<label class="form-control w-full">
				<div class="label">
					<span class="label-text">Hash: </span>
				</div>

				<textarea
					v-model="hash"
					readonly
					rows="3"
					class="textarea textarea-bordered w-full" />
			</label>

			<button
				class="btn btn-outline btn-primary ms-auto"
				@click="clear">
				Clear Hash
			</button>
			<button
				class="btn btn-primary"
				@click="copy">
				Copy Hash
			</button>
		</template>
	</Card>
</template>

<script>
	import CryptoJS from "crypto-js";
	import Card from "@components/Card.vue";
	import Select from "@components/Select.vue";
	import Radio from "@components/Radio.vue";

	export default {
		components: {
			Card,
			Select,
			Radio
		},
		data() {
			return {
				secret: "",
				content: "",
				hash: "",

				hashFunction: "SHA256",
				hashFunctionOptions: [
					{
						text: "SHA-256",
						value: "SHA256"
					},
					{
						text: "SHA-512",
						value: "SHA512"
					}
				],

				outputType: "HEX"
			};
		},
		mounted() {
			this.$fns.scrollToTop();
		},
		methods: {
			generate() {
				if (this.$fns.isNullOrEmpty(this.secret) || this.$fns.isNullOrEmpty(this.content)) return;

				this.hash = "";
				let hmac = null;
				if (this.hashFunction === "SHA256") {
					hmac = CryptoJS.HmacSHA256(this.content, this.secret);
				} else if (this.hashFunction === "SHA512") {
					hmac = CryptoJS.HmacSHA512(this.content, this.secret);
				}

				if (this.outputType === "HEX") {
					this.hash = CryptoJS.enc.Hex.stringify(hmac);
				} else if (this.outputType === "BASE64") {
					this.hash = CryptoJS.enc.Base64.stringify(hmac);
				}
			},
			copy() {
				if (this.$fns.isNullOrEmpty(this.hash)) return;
				this.$fns.copyToClipboard(this.hash, "HMAC Hash copied to clipboard");
			},
			clear() {
				this.hash = "";
			}
		}
	};
</script>

<style lang="scss" scoped></style>
