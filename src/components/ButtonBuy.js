import React from 'react';

const ButtonBuy = (props) => {
	const { handleClickBuy } = props;
	return (
		<div class="bottom-buttons-bar">
			<button onClick={handleClickBuy}>Buy</button>
		</div>
	);
};

export default ButtonBuy;
