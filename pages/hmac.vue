<script setup>
	import { Button } from "@/components/ui/button";
	import { Label } from "@/components/ui/label";
	import { Input } from "@/components/ui/input";
	import { Textarea } from "@/components/ui/textarea";
	import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
	import { ref } from "vue";
	import CryptoJS from "crypto-js";

	const content = ref("");
	const secret = ref("");
	const hashFunction = ref("SHA256");
	const hashFunctionOptions = [
		{
			text: "SHA-256",
			value: "SHA256"
		},
		{
			text: "SHA-512",
			value: "SHA512"
		}
	];
	const outputFormat = ref("BASE64");
	const outputFormatOptions = [
		{
			text: "Base64",
			value: "BASE64"
		},
		{
			text: "Hex",
			value: "HEX"
		}
	];

	const hash = ref("");

	const generate = () => {
		if (fns.isNullOrEmpty(secret.value) || fns.isNullOrEmpty(content.value)) return;

		hash.value = "";
		let hmac = null;

		if (hashFunction.value === "SHA256") {
			hmac = CryptoJS.HmacSHA256(content.value, secret.value);
		} else if (hashFunction.value === "SHA512") {
			hmac = CryptoJS.HmacSHA512(content.value, secret.value);
		}

		if (outputFormat.value === "HEX") {
			hash.value = CryptoJS.enc.Hex.stringify(hmac);
		} else if (outputFormat.value === "BASE64") {
			hash.value = CryptoJS.enc.Base64.stringify(hmac);
		}
	};

	const copy = () => {
		if (fns.isNullOrEmpty(hash.value)) return;
		fns.copyToClipboard(hash.value, "HMAC Hash copied to clipboard");
	};
	const clear = () => {
		hash.value = "";
	};
</script>

<template>
	<Card class="w-full max-w-3xl">
		<CardHeader>
			<CardTitle>HMAC Hash Generator</CardTitle>
			<CardDescription>Content and Secret are not stored and is only used to generate the HMAC hash.</CardDescription>
		</CardHeader>
		<CardContent class="flex flex-col gap-4">
			<div class="flex flex-col gap-2">
				<Label for="textarea">Content:</Label>
				<Textarea
					id="textarea"
					class="w-full"
					v-model="content"
					:rows="5"
					autoFocus />
			</div>

			<div class="flex flex-col gap-2">
				<Label for="secret">Secret:</Label>
				<Input
					v-model="secret"
					id="secret"
					type="text" />
			</div>

			<SelectInput
				v-model="hashFunction"
				:options="hashFunctionOptions"
				name="hashFunction"
				label="Hash Algorithms" />

			<SelectInput
				v-model="outputFormat"
				:options="outputFormatOptions"
				name="outputFormat"
				label="Output Format" />

			<Button @click="generate">Generate HMAC Hash</Button>

			<div class="flex flex-col gap-2">
				<Label for="hash-textarea">Hash:</Label>
				<Textarea
					id="hash-textarea"
					class="w-full"
					v-model="hash"
					:rows="5" />
			</div>
		</CardContent>
		<CardFooter class="flex w-full justify-end gap-4">
			<Button
				variant="outline"
				@click="clear">
				Clear Hash
			</Button>
			<Button @click="copy">Copy Hash</Button>
		</CardFooter>
	</Card>
</template>

<style lang="scss" scoped></style>
