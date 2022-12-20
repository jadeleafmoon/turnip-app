import React from 'react';

const ButtonMyProfile = (props) => {
	const { handleClickMyProfileButton, color } = props;

	return (
		<div>
			<button onClick={handleClickMyProfileButton} activate-color={color}>My Profile</button>
		</div>
	);
};

export default ButtonMyProfile;
