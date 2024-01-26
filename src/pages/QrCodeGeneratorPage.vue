<template>
	<Card class="w-[650px]">
		<template v-slot:header>QR Code Generator</template>

		<template v-slot:default>
			<label class="form-control w-full">
				<div class="label">
					<span class="label-text">Type the text to be encoded in a QR Code</span>
				</div>
				<input
					v-model="text"
					type="text"
					class="input input-bordered w-full" />
			</label>

			<div class="form-control my-6 w-auto">
				<Select
					v-model="errorCorrection"
					:options="errorCorrectionOptions"
					label="Error Correction Level: " />
			</div>

			<button
				class="btn btn-primary mb-6"
				@click="generate">
				Generate
			</button>
		</template>

		<template v-slot:footer>
			<div class="flex w-full flex-col items-center">
				<canvas
					v-show="showCanvas"
					:alt="`${text} qr code`"
					ref="canvas"
					class="mx-auto block"></canvas>
				<a
					class="hidden"
					ref="download"></a>

				<button
					class="btn btn-primary ms-auto block"
					@click="save">
					Save
				</button>
			</div>
		</template>
	</Card>
</template>

<script>
	import QRCode from "qrcode";
	import Card from "@components/Card.vue";
	import Select from "@components/Select.vue";

	export default {
		components: {
			Card,
			Select
		},
		data() {
			return {
				text: "",
				showCanvas: false,

				errorCorrection: "H",
				errorCorrectionOptions: [
					{
						text: "Low (~7%)",
						value: "L"
					},
					{
						text: "Medium (~15%)",
						value: "M"
					},
					{
						text: "Quartile (~25%)",
						value: "Q"
					},
					{
						text: "High (~30%)",
						value: "H"
					}
				]
			};
		},
		mounted() {
			this.$fns.scrollToTop();
		},
		methods: {
			generate() {
				if (this.text == null || this.text == "") {
					this.showCanvas = false;
					return;
				}
				this.createQrCode();
			},
			save() {
				if (this.text == null || this.text == "") {
					this.showCanvas = false;
					return;
				}

				this.createQrCode();

				var canvas = this.$refs.canvas;
				var dataURL = canvas.toDataURL("image/jpeg", 1.0);
				const download = this.$refs.download;

				download.href = dataURL;
				download.download = "QR Code.jpg";
				download.click();

				this.$events.trigger("newNotification", "QR Code saved");
			},
			createQrCode() {
				this.showCanvas = true;

				QRCode.toCanvas(this.$refs.canvas, this.text, { errorCorrectionLevel: this.errorCorrection }, () => {});
			}
		}
	};
</script>

<style lang="scss" scoped></style>
