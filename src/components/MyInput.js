import React from 'react';

const MyInput = (props) => {
    const { name, value, inputRef } = props;
	return (
		<div>
			<input type="text" name={name} value={value} ref={inputRef}  />
		</div>
	);
};

export default MyInput;
