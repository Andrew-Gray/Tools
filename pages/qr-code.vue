<script setup>
	import { Button } from "@/components/ui/button";
	import { Label } from "@/components/ui/label";
	import { Input } from "@/components/ui/input";
	import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
	import { ref } from "vue";
	import QRCode from "qrcode";

	const text = ref("");
	const showCanvas = ref(false);
	const canvas = ref(null);
	const download = ref(null);

	const errorCorrection = ref("H");
	const errorCorrectionOptions = [
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
	];

	const generate = () => {
		if (text.value == null || text.value == "") {
			showCanvas.value = false;
			return;
		}
		createQrCode();
	};

	const save = () => {
		if (text.value == null || text.value == "") {
			showCanvas.value = false;
			return;
		}

		createQrCode();

		var dataURL = canvas.value.toDataURL("image/jpeg", 1.0);

		download.value.href = dataURL;
		download.value.download = "QR Code.jpg";
		download.value.click();
	};

	const createQrCode = () => {
		showCanvas.value = true;

		QRCode.toCanvas(canvas.value, text.value, { errorCorrectionLevel: errorCorrection.value }, () => {});
	};
</script>

<template>
	<Card class="w-full max-w-3xl">
		<CardHeader>
			<CardTitle>QR Code Generator</CardTitle>
		</CardHeader>
		<CardContent class="flex flex-col gap-4">
			<div class="flex flex-col gap-2">
				<Label for="length">Type the text to be encoded in a QR Code</Label>
				<Input
					id="length"
					v-model="text"
					type="text" />
			</div>

			<SelectInput
				v-model="errorCorrection"
				:options="errorCorrectionOptions"
				name="errorCorrection"
				label="Error Correction Level" />

			<Button @click="generate">Generate</Button>
			<a
				class="hidden"
				ref="download"></a>

			<canvas
				v-show="showCanvas"
				:alt="`${text} qr code`"
				ref="canvas"
				class="mx-auto block"></canvas>
		</CardContent>
		<CardFooter class="flex w-full justify-end gap-4">
			<Button
				v-if="showCanvas"
				@click="save">
				Save
			</Button>
		</CardFooter>
	</Card>
</template>

<style lang="scss" scoped></style>
