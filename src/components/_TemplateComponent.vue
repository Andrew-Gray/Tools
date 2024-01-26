<template>
	<label class="label cursor-pointer">
		<input
			v-model="dModelValue"
			type="radio"
			class="radio-primary radio"
			@input="mChanged" />
	</label>
</template>

<script>
	export default {
		data() {
			return {
				dModelValue: false
			};
		},
		props: {
			modelValue: {
				type: String,
				required: true
			}
		},
		watch: {
			modelValue(newValue) {
				this.dModelValue = newValue;
			}
		},
		mounted() {
			this.dModelValue = this.modelValue;
		},
		methods: {
			mChanged(e) {
				this.$emit("update:modelValue", this.dModelValue);
				this.$emit("change", this.dModelValue);
			}
		}
	};
</script>

<style lang="scss" scoped></style>
