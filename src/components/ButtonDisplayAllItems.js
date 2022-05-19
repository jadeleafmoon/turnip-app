import React from 'react';

const ButtonDisplayAllItems = (props) => {
    const { handleDisplayItemsClick } = props;
    
	return <button onClick={handleDisplayItemsClick}>Display All Items</button>;
};

export default ButtonDisplayAllItems;
