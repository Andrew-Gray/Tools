<template>
	<Card class="w-[650px]">
		<template v-slot:header>Password Generator</template>

		<template v-slot:default>
			<label class="form-control w-full">
				<div class="label">
					<span class="label-text">How many characters should the password be?</span>
				</div>
				<input
					v-model="length"
					:min="1"
					:max="128"
					type="number"
					class="input input-bordered w-full" />
				<div class="label">
					<span class="label-text text-xs">Max 128</span>
				</div>
			</label>

			<div class="my-6 flex flex-col">
				<div class="form-control w-auto">
					<Toggle
						v-model="upperCase"
						label="Uppercase (A-Z)" />
					<Toggle
						v-model="lowerCase"
						label="Lowercase (a-z)" />
					<Toggle
						v-model="numbers"
						label="Numbers (0-9)" />
					<Toggle
						v-model="specialChars"
						label="Special Characters (!@#$%^&*)" />
				</div>
			</div>

			<button
				class="btn btn-primary mb-6"
				@click="createPassword">
				Generate
			</button>
		</template>

		<template v-slot:footer>
			<input
				v-model="password"
				type="text"
				readonly
				class="input input-bordered input-ghost w-full" />

			<button
				class="btn btn-primary ms-auto"
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
				length: 8,
				upperCase: true,
				lowerCase: true,
				numbers: true,
				specialChars: true,
				passPhrase: false,

				upperCaseSet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
				lowerCaseSet: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
				numbersSet: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
				specialCharsSet: ["!", "@", "#", "$", "%", "^", "&", "*"],

				password: ""
			};
		},
		mounted() {
			this.$fns.scrollToTop();
		},
		methods: {
			createPassword() {
				if (this.length > 128) this.length = 128;
				let passCharSet = [];
				let newPassword = "";

				if (this.upperCase) {
					passCharSet = [...passCharSet, ...this.upperCaseSet];
				}
				if (this.lowerCase) {
					passCharSet = [...passCharSet, ...this.lowerCaseSet];
				}
				if (this.numbersChars) {
					passCharSet = [...passCharSet, ...this.numbersSet];
				}
				if (this.specialChars) {
					passCharSet = [...passCharSet, ...this.specialCharsSet];
				}

				//Generate passwords
				for (let idx = 1; idx <= this.length; idx++) {
					const randomCharIdx = this.getRandomInt(0, passCharSet.length - 1);
					newPassword += passCharSet[randomCharIdx];
				}
				this.password = newPassword;
			},
			getRandomInt(min, max) {
				min = Math.ceil(min);
				max = Math.floor(max);
				return Math.floor(Math.random() * (max - min + 1)) + min;
			},
			copy() {
				if (this.$fns.isNullOrEmpty(this.password)) return;
				this.$fns.copyToClipboard(this.password, "Password copied to clipboard");
			}
		}
	};
</script>

<style lang="scss" scoped></style>
