class passwords {
	constructor() {
		this.upperCaseSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];;
		this.lowerCaseSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
		this.numbersSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
		this.specialCharsSet = ["!", "@", "#", "$", "%", "^", "&", "*"];
	}

	createPassword(length = 16, upperCase = true, lowerCase = true, numbersChars = true, specialChars = true) {
		let passLength = length;
		if (passLength > 128) passLength = 128;
		let passCharSet = [];
		let newPassword = "";

		if (upperCase) {
			passCharSet = [...passCharSet, ...this.upperCaseSet];
		}
		if (lowerCase) {
			passCharSet = [...passCharSet, ...this.lowerCaseSet];
		}
		if (numbersChars) {
			passCharSet = [...passCharSet, ...this.numbersSet];
		}
		if (specialChars) {
			passCharSet = [...passCharSet, ...this.specialCharsSet];
		}

		//Generate passwords
		for (let idx = 1; idx <= passLength; idx++) {
			const randomCharIdx = this.getRandomInt(0, passCharSet.length - 1);
			newPassword += passCharSet[randomCharIdx];
		}
		return newPassword;
	}

	getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}

export default new passwords();
