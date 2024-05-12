<script setup>
	import { Label } from "@/components/ui/label";
	import { Switch } from "@/components/ui/switch";
	import { Button } from "@/components/ui/button";
	import { Input } from "@/components/ui/input";
	import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
	import { ref } from "vue";

	const length = ref(8);
	const lengthMin = 1;
	const lengthMax = 128;
	const upperCase = ref(true);
	const lowerCase = ref(true);
	const numbers = ref(true);
	const specialChars = ref(true);
	// const passPhrase = ref(false);

	let password = ref("");

	const createPassword = () => {
		if (length.value > 128) length.value = 128;
		password.value = passwords.createPassword(length.value, upperCase.value, lowerCase.value, numbers.value, specialChars.value);
	};
	const copyPassword = () => {
		if (fns.isNullOrEmpty(password.value)) return;
		fns.copyToClipboard(password.value, "Password copied to clipboard");
	};
</script>

<template>
	<Card class="w-full max-w-3xl">
		<CardHeader>
			<CardTitle>Password Generator</CardTitle>
			<CardDescription>Passwords generated are not stored.</CardDescription>
		</CardHeader>
		<CardContent class="flex flex-col gap-4">
			<Label for="length">How many characters should the password be? (Max 128)</Label>
			<Input
				id="length"
				v-model="length"
				type="number"
				:min="lengthMin"
				:max="lengthMax" />

			<div class="flex items-center space-x-2">
				<Switch
					id="uppercase"
					:checked="upperCase"
					@update:checked="upperCase = !upperCase" />
				<Label for="uppercase">Uppercase (A-Z)</Label>
			</div>

			<div class="flex items-center space-x-2">
				<Switch
					id="lowerCase"
					:checked="lowerCase"
					@update:checked="lowerCase = !lowerCase" />
				<Label for="lowerCase">Lowercase (a-z)</Label>
			</div>

			<div class="flex items-center space-x-2">
				<Switch
					id="numbers"
					:checked="numbers"
					@update:checked="numbers = !numbers" />
				<Label for="numbers">Numbers (0-9)</Label>
			</div>

			<div class="flex items-center space-x-2">
				<Switch
					id="specialChars"
					:checked="specialChars"
					@update:checked="specialChars = !specialChars" />
				<Label for="specialChars">Special Characters (!@#$%^&*)</Label>
			</div>

			<Button @click="createPassword">Generate</Button>

			<Input
				class="w-full"
				v-model="password"
				readonly
				type="text" />
		</CardContent>
		<CardFooter class="flex w-full justify-end gap-4">
			<Button @click="copyPassword">Copy</Button>
		</CardFooter>
	</Card>
</template>

<style lang="scss" scoped></style>
