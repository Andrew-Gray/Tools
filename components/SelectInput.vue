<script setup>
	import { Label } from "@/components/ui/label";
	import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

	const emit = defineEmits(["update:modelValue"]);
	const props = defineProps({
		modelValue: {
			type: [String, Number],
			required: false
		},
		options: {
			type: Array,
			default: () => []
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

	const selectedValue = ref(props.modelValue);

	const selectChanged = () => {
		emit("update:modelValue", selectedValue.value);
	};
</script>

<template>
	<Label :for="props.name">{{ props.label }}: </Label>
	<Select
		:id="props.name"
		v-model="selectedValue"
		@update:modelValue="selectChanged">
		<SelectTrigger>
			<SelectValue />
		</SelectTrigger>
		<SelectContent>
			<SelectGroup>
				<SelectItem
					v-for="option in props.options"
					:key="option.value"
					:value="option.value">
					{{ option.text }}
				</SelectItem>
			</SelectGroup>
		</SelectContent>
	</Select>
</template>

<style lang="scss" scoped></style>
