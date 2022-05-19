/* eslint-disable */

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

function App() {
	// State
	const [ color, setColor ] = useState('blue');
	const [ items, setItems ] = useState([]);
	const [ selectedItem, setSelectedItem ] = useState('');
	const [ currentView, setCurrentView ] = useState('all items');
	const [ hello, setHello ] = useState('...blank...');

	const itemNameRef = useRef(null);
	const itemPriceRef = useRef(null);

	// Hooks
	useEffect(() => {
		console.log('First render.');
		// handleDisplayAllItems();
	}, []);

	// Handlers
	const handleDisplayItemsClick = () => {
		handleDisplayAllItems();
	};

	const handleClickItem = (item) => {
		setSelectedItem(item);
		setCurrentView('single item');
	};

	const handleClickTitle = (item) => {
		handleDisplayAllItems();
	};

	const handleDisplayAllItems = () => {
		axios.get('/items').then((response) => {
			setItems(response.data);
		});
		setCurrentView('all items');
	};

	const handleClickAddItem = () => {
		const newItem = {
			name  : itemNameRef.current.value,
			price : parseInt(itemPriceRef.current.value)
		};
		console.log('New item:', newItem);
		axios
			.post('/items', newItem)
			.then((response) => {
				handleDisplayAllItems();
			})
			.catch((err) => console.log(err));
	};

	const handleClickDeleteItem = (item) => {
		const id = item.id;

		axios
		.delete(`/items/${id}`)
		.then((response) => {
			handleDisplayAllItems();
		})
		.catch((err) => console.log(err));

		
	};	

	const handleHello = () => {
		axios.get('/hello').then((response) => {
			console.log("Hello!");
		});
		setHello('Hello');
	};

	// Render
	return (
		<div>
			<h1 onClick={handleDisplayAllItems}>Turnip</h1>

			<section>
				<h2>Add an Item</h2>
				<label>
					<input type="text" name="item-name" ref={itemNameRef} />
				</label>

				<label>
					<input type="text" name="item-price" ref={itemPriceRef} />
				</label>

				<button onClick={handleClickAddItem}>Add Item</button>
			</section>

			<section>
				<h2> Hello and Testing </h2>
				<button onClick={handleHello}>/hello</button>
				<h3>{hello}</h3>
			</section>

			<section>
				<h2>Items</h2>
				<button onClick={handleDisplayItemsClick}>Display All Items</button>

				{currentView === 'all items' ? (
					<section>
						{items.map((item) => {
							return (
								<div key={uuidv4()}>
									<span>{item.id} {item.name} {item.price}</span>
									<button onClick={() => handleClickItem(item)}>View</button>
								</div>
							);
						})}
					</section>
				) : (
					<section>
						<div>
							<span>{selectedItem.id} {selectedItem.name} {selectedItem.price}</span>
							<button onClick={() => handleClickDeleteItem(selectedItem)}>Delete</button>
						</div>
					</section>
				)}
			</section>
		</div>
	);
}

export default App;
