import React from 'react';

const ButtonMyProfile = (props) => {
	const { currentView, handleClickMyProfileButton, color } = props;

	return (
		<div>
			<button onClick={handleClickMyProfileButton} activateColor={color}>My Profile</button>
		</div>
	);
};

export default ButtonMyProfile;
