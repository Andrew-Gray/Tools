import $events from "@helpers/events.js";

class Functions {
	constructor() {
		this.Functions = {};
	}

	copyToClipboard(contents, successMsg, failMsg = "Unable to copy") {
		if (!navigator.clipboard) {
			console.error(failMsg);
			return;
		}

		navigator.clipboard.writeText(contents);
		$events.trigger("newNotification", successMsg);
	}

	isNullOrEmpty(value) {
		return value === null || value === undefined || value === "";
	}

	scrollToTop() {
		window.scrollTo(0, 0);
	}
}

export default new Functions();
