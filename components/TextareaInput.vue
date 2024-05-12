<script setup>
	import { Label } from "@/components/ui/label";
	import { Textarea } from "@/components/ui/textarea";

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
		},
		rows: {
			type: Number,
			default: 5
		}
	});

	const vmodel = ref(props.modelValue);
	const rowCount = ref(props.rows);

	watch(
		() => props.rows,
		(newVal, oldVal) => {
			rowCount.value = props.rows;
		}
	);

	const inputChanged = () => {
		emit("update:modelValue", vmodel.value);
	};
</script>

<template>
	<Label :for="props.name">{{ props.label }}</Label>
	<Textarea
		:id="props.name"
		class="w-full"
		v-model="vmodel"
		:rows="rowCount"
		@input="inputChanged" />
</template>

<style lang="scss" scoped></style>
