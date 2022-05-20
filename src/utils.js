const checkValidItem = (item) => {
	let isValid = true;

	if (!checkNoBlankValues(item)) {
		console.log('Fail checkNoBlankValues');
		return false;
	}
	if (!checkValidPrice(item.price)) {
		console.log('Fail checkValidPrice');
		return false;
	}

	return isValid;
};

const checkValidPrice = (price) => {
	let isValid = true;

	if (isNaN(price)) return false;

	return isValid;
};

const checkNoBlankValues = (item) => {
	let isValid = true;
	for (const key in item) {
		const val = item[key];
		if (val === '' || val === null || val === undefined) {
			return false;
		}
	}
	return isValid;
};

module.exports = { checkValidItem };
