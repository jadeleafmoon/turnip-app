import React from 'react';

const ButtonAddItem = (props) => {
    const { setDisplayAddItem } = props;

	return (
		<div>
			<button onClick={() => setDisplayAddItem(true)}>Add Item</button>
		</div>
	);
};

export default ButtonAddItem;
