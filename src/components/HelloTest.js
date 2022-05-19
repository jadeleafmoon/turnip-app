import React from 'react';

const HelloTest = (props) => {
    const { handleHello, hello } = props;
	return (
		<section>
			<h2> Hello and Testing </h2>
			<button onClick={handleHello}>/hello</button>
			<h3>{hello}</h3>
		</section>
	);
};

export default HelloTest;
