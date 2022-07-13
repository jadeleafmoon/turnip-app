import React from 'react';

const ButtonSelectUser = (props) => {
    const { currentUser, setCurrentUser} = props;

	return (
		<div>
			{/* <select value={currentUser} onChange={e => setCurrentUser(e.target.value)}>
				<option default>Select User</option>
                <option value="Bob" >Bob</option>
				<option value="Enzo">Enzo</option>
			</select> */}
		</div>
	);
};

export default ButtonSelectUser;
