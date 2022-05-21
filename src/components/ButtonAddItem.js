import React from 'react';

const ButtonAddItem = (props) => {
    const { setDisplayAddItem, setCurrentView, handleClickCancelAddItem, color } = props;

	return (
		<div>
			<button onClick={() => setCurrentView("add item")} activateColor={color}>Sell Item</button>
		</div>
	);
};

export default ButtonAddItem;
