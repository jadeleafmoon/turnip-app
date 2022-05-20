import React from 'react';
import ButtonAddItem from './ButtonAddItem';
import ButtonHome from './ButtonHome';

const Navbar = (props) => {
	const { currentView, setCurrentView, handleClickHomeButton } = props;
	return (
		<section>
			<section>
				<h1>Turnip</h1>
			</section>
			{/* <section>
				<ButtonHome handleClickHomeButton={handleClickHomeButton} />
				<ButtonAddItem setCurrentView={setCurrentView}/>
			</section> */}
		</section>
	);
};

export default Navbar;
