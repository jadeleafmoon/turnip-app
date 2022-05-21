import React from 'react';
import ButtonAddItem from './ButtonAddItem';
import ButtonHome from './ButtonHome';

const Navbar = (props) => {
	const { currentView, setCurrentView, handleClickHomeButton } = props;
	return (
		<section className="navbar">
			<p>TURNIP</p>
		</section>
	);
};

export default Navbar;
