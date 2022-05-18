import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

function App() {
	// State
	const [ color, setColor ] = useState('blue');
	const [ items, setItems ] = useState([]);
	const [ selectedItem, setSelectedItem] = useState("");
	const [ currentView, setCurrentView ] = useState("all items");

	const itemRef = useRef(null);

	// Hooks
	useEffect(() => {
		console.log('First render.');
	}, []);

	// Handlers
	const handleButtonClick = () => {
		if (color === 'blue') setColor('red');
		if (color === 'red') setColor('blue');
	};

	const handleDisplayItemsClick = () => {
		axios.get('/items').then((response) => {
			setItems(response.data);
		});
	};

	const handleClickItem = (item) => {
		// console.log("-- clicked item");
		console.log(item.name);
		setCurrentView("single item");
	};

	const handleClickTitle = () => {
		setCurrentView("all items");
	};
	// Render
	return (
		<div>
			<h1>Turnip</h1>
			<h2>{color}</h2>
			<button onClick={handleButtonClick}>Change color</button>

			<h2>Items</h2>
			<button onClick={handleDisplayItemsClick}>Display Items</button>

			
			<section>
				{items.map((item) => {
					return <div key={uuidv4()} onClick={() => handleClickItem(item)}>
						<span>{item.name}</span>
						<span>${item.price}</span>
						
						</div>;
				})}
			</section>
		</div>
	);
}

export default App;