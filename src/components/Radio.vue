<template>
	<label class="label cursor-pointer">
		<span class="label-text">
			{{ dLabel }}
		</span>

		<input
			v-model="dModelValue"
			type="radio"
			:name="dName"
			:value="value"
			class="radio-primary radio"
			@input="mChanged" />
	</label>
</template>

<script>
	export default {
		data() {
			return {
				dModelValue: false,
				dLabel: null,
				dName: null,
				dValue: null
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
			name: {
				type: String,
				default: null
			},
			value: {
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
			},
			name(newValue) {
				this.dName = newValue;
			},
			value(newValue) {
				this.dValue = newValue;
			}
		},
		mounted() {
			this.dModelValue = this.modelValue;
			this.dLabel = this.label;
			this.dName = this.name;
			this.dValue = this.value;
		},
		methods: {
			mChanged(e) {
				this.$emit("update:modelValue", this.dValue);
				this.$emit("change", this.dValue);
			}
		}
	};
</script>

<style lang="scss" scoped></style>
