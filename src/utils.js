const checkValidItem = (item) => {
	let isValid = true;

	if (!checkNoBlankValues(item)) return false;
	if (!checkValidPrice(item.price)) return false;

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
