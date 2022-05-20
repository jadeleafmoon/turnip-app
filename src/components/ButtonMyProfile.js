import React from 'react';

const ButtonMyProfile = (props) => {
	const { currentView, handleClickMyProfileButton } = props;

	return (
		<div>
			<button onClick={handleClickMyProfileButton}>My Profile</button>
		</div>
	);
};

export default ButtonMyProfile;
