<template>
	<label class="label cursor-pointer">
		<input
			v-model="dModelValue"
			type="checkbox"
			class="toggle toggle-primary"
			@input="mChanged" />

		<span class="label-text">
			{{ dLabel }}
		</span>
	</label>
</template>

<script>
	export default {
		data() {
			return {
				dModelValue: false,
				dLabel: null
			};
		},
		props: {
			modelValue: {
				type: Boolean,
				required: true
			},
			label: {
				type: String,
				default: null
			}
		},
		watch: {
			modelValue(newValue) {
				this.dModelValue = newValue;
			},
			label(newValue) {
				this.dLabel = newValue;
			}
		},
		mounted() {
			this.dModelValue = this.modelValue;
			this.dLabel = this.label;
		},
		methods: {
			mChanged(e) {
				this.$emit("update:modelValue", e.target.checked);
				this.$emit("change", e.target.checked);
			}
		}
	};
</script>

<style lang="scss" scoped></style>
