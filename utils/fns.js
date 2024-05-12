import { toast } from 'vue-sonner';

class fns {
	copyToClipboard(contents, successMsg, failMsg = "Unable to copy") {
		if (!navigator.clipboard) {
			console.error(failMsg);
			return;
		}

		navigator.clipboard.writeText(contents);
		// events.trigger("newNotification", successMsg);
		toast(successMsg, {
			action: {
				label: "Close",
				onClick: () => { },
			},
		})
	}

	isNullOrEmpty(value) {
		return value === null || value === undefined || value === "";
	}

	scrollToTop() {
		window.scrollTo(0, 0);
	}
}

export default new fns();
