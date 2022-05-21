import React from 'react';

const ButtonHome = (props) => {
    const { handleClickHomeButton, color } = props;
    
	return <div><button onClick={handleClickHomeButton} activate-color={color}>Home</button></div>;
};

export default ButtonHome;
