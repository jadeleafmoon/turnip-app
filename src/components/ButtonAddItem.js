import React from 'react';

const ButtonAddItem = (props) => {
    const { setDisplayAddItem, setCurrentView } = props;

	return (
		<div>
			<button onClick={() => setCurrentView("add item")}>Sell Item</button>
		</div>
	);
};

export default ButtonAddItem;
