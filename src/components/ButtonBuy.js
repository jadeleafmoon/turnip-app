import React from 'react';

const ButtonBuy = (props) => {
	const { handleClickBuy } = props;
	return (
		<div>
			<button onClick={handleClickBuy}>Buy</button>
		</div>
	);
};

export default ButtonBuy;
