import React from 'react';

const ButtonDisplayAllItems = (props) => {
    const { handleDisplayItemsClick } = props;
    
	return <button onClick={handleDisplayItemsClick}>Home</button>;
};

export default ButtonDisplayAllItems;
