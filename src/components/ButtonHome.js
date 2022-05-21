import React from 'react';

const ButtonHome = (props) => {
    const { handleClickHomeButton, color } = props;
    
	return <button onClick={handleClickHomeButton} activateColor={color}>Home</button>;
};

export default ButtonHome;
