<script setup>
	import { Label } from "@/components/ui/label";
	import { Input } from "@/components/ui/input";

	const emit = defineEmits(["update:modelValue"]);
	const props = defineProps({
		modelValue: {
			type: [String, Number],
			required: false
		},
		name: {
			type: String,
			default: null
		},
		label: {
			type: String,
			default: null
		}
	});

	const vmodel = ref(props.modelValue);

	const inputChanged = () => {
		emit("update:modelValue", vmodel.value);
	};
</script>

<template>
	<Label :for="props.name">{{ props.label }}</Label>
	<Input
		v-model="vmodel"
		:id="props.name"
		type="text"
		@input="inputChanged" />
</template>

<style lang="scss" scoped></style>
