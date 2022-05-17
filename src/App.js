import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

function App() {
	// State
	const [ color, setColor ] = useState('blue');
	const [ version, setVersion ] = useState('Unknown :(');
	const [ items, setItems ] = useState([]);

	// Hooks
	useEffect(() => {
		console.log('First render');
	}, []);

	// Handlers
	const handleButtonClick = () => {
		if (color === 'blue') setColor('red');
		if (color === 'red') setColor('blue');
	};

	const handleGetClick = () => {
		console.log('Get clicked.');

		axios.get('/hello').then((response) => {
			console.log('DATA:', response.data);
			setVersion(response.data);
		});
	};

	const handleDisplayItemsClick = () => {
		axios.get('/items').then((response) => {
			console.log('-- Diplay Items:', response.data);
			setItems(response.data);
		});
	};

	// Render
	return (
		<div>
			<h1>Ravi - Fullstack Example</h1>
			<h2>{color}</h2>
			<button onClick={handleButtonClick}>Change color</button>
			<button onClick={handleGetClick}>Get</button>

			<p>The version on PostgreSQL is:</p>
			<p>{version}</p>

			<h2>Items</h2>
			<button onClick={handleDisplayItemsClick}>Display Item</button>
			<section>
				{items.map((item) => {
					return <div key={uuidv4()}>{item.name}</div>;
				})}
			</section>
		</div>
	);
}

export default App;