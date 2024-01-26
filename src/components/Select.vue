<template>
	<label class="label cursor-pointer">
		<span class="label-text">
			{{ dLabel }}
		</span>

		<select
			v-model="dModelValue"
			class="select select-bordered w-full max-w-xs"
			@input="mChanged">
			<option
				v-for="option in dOptions"
				:value="option.value">
				{{ option.text }}
			</option>
		</select>
	</label>
</template>

<script>
	export default {
		data() {
			return {
				dModelValue: "",
				dLabel: "",
				dOptions: []
			};
		},
		props: {
			modelValue: {
				type: String,
				required: true
			},
			label: {
				type: String,
				default: null
			},
			options: {
				type: Array,
				default: []
			}
		},
		watch: {
			modelValue(newValue) {
				this.dModelValue = newValue;
			},
			label(newValue) {
				this.dLabel = newValue;
			},
			options(newValue) {
				this.dOptions = newValue;
			}
		},
		mounted() {
			this.dModelValue = this.modelValue;
			this.dLabel = this.label;
			this.dOptions = this.options;
		},
		methods: {
			mChanged(e) {
				this.$emit("update:modelValue", e.target.value);
				this.$emit("change", e.target.value);
			}
		}
	};
</script>

<style lang="scss" scoped></style>
