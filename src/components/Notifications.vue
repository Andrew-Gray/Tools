<template>
	<div class="toast absolute bottom-16">
		<Toast
			v-for="notif in notifications"
			:key="notif.id"
			:message="notif.message"
			:id="notif.id"
			@close="removeMessage" />
	</div>
</template>

<script>
	import Toast from "@components/Toast.vue";

	export default {
		components: {
			Toast
		},
		data() {
			return {
				notifications: []
			};
		},
		created() {
			this.$events.on("newNotification", (message) => {
				this.notifications.push({
					message,
					id: crypto.randomUUID()
				});
			});
		},
		methods: {
			removeMessage(id) {
				this.notifications = this.notifications.filter((notif) => {
					return notif.id !== id;
				});
			}
		}
	};
</script>

<style lang="scss" scoped></style>
