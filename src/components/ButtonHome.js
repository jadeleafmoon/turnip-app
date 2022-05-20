import React from 'react';

const ButtonHome = (props) => {
    const { handleClickHomeButton } = props;
    
	return <button onClick={handleClickHomeButton}>Home</button>;
};

export default ButtonHome;
