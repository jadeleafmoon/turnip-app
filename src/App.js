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

	const itemNameRef = useRef(null);
	const itemPriceRef = useRef(null);

	// Hooks
	useEffect(() => {
		console.log('First render.');
		handleDisplayAllItems();
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

	const handleAddItemClick = () => {
		const newItem = {
			name  : itemNameRef.current.value,
			price : parseInt(itemPriceRef.current.value)
		};
		console.log('New item:', newItem);
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

				<button onClick={handleAddItemClick}>Add Item</button>
			</section>

			<section>
				<h2>Items</h2>
				<button onClick={handleDisplayItemsClick}>Display All Items</button>

				{currentView === 'all items' ? (
					<section>
						{items.map((item) => {
							return (
								<div key={uuidv4()} onClick={() => handleClickItem(item)}>
									{item.name} {item.price}
								</div>
							);
						})}
					</section>
				) : (
					<section>
						<div>
							{selectedItem.name} {selectedItem.price}
						</div>
					</section>
				)}
			</section>
		</div>
	);
}

export default App;
