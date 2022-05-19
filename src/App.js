/* eslint-disable */

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

import Navbar from './components/Navbar';
import AddItemField from './components/AddItemField';

function App() {
	// State
	const [ color, setColor ] = useState('blue');
	const [ items, setItems ] = useState([]);
	const [ selectedItem, setSelectedItem ] = useState('');
	const [ editedItem, setEditedItem ] = useState('');

	const [ itemToAdd, setItemToAdd ] = useState({
		name: "",
		price: ""
	});

	const [ currentView, setCurrentView ] = useState('all items');
	const [ hello, setHello ] = useState('...blank...');

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
		// const newItem = {
		// 	name  : itemNameRef.current.value,
		// 	price : parseInt(itemPriceRef.current.value)
		// };
		console.log('New item:', itemToAdd);
		axios
			.post('/items', itemToAdd)
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

	const handleClickEditItem = (item) => {
		const id = item.id;
		setEditedItem(item);
		// const newEdit = { name: "Apple", price: 100};
		axios
			.patch(`/items/${id}`, newEdit)
			.then((response) => {
				handleDisplayAllItems();
			})
			.catch((err) => console.log(err));
	};

	const handleEditItem = (e) => {
		e.preventDefault();

		const fieldName = e.target.getAttribute("name");
		const textValue = e.target.value;
		
		const newItem = {};
		newItem[fieldName] = textValue;
		setItemToAdd( { ...itemToAdd, ...newItem } );

	};

	const handleClickEditItemButton = (item) => {
		const id = item.id;
		const newEdit = { name: "Apple", price: 100};
		axios
			.patch(`/items/${id}`, newEdit)
			.then((response) => {
				handleDisplayAllItems();
			})
			.catch((err) => console.log(err));
	};

	const handleHello = () => {
		axios.get('/hello').then((response) => {
			console.log('Hello!');
		});
		setHello('Hello');
	};

	// Render
	return (
		<div>
			<Navbar />
			<AddItemField 
				handleClickAddItem={handleClickAddItem}
				itemToAdd={itemToAdd}
				setItemToAdd={setItemToAdd}
				handleEditItem={handleEditItem}
			/>
			

			<section>
				<h2>Submit Edit</h2>
				{/* <label>
					<input type="text" value={selectedItem.name} onChange={e => setSelectedItem.name(e.target.value)}/>
				</label> */}

				

				<button onClick={handleClickEditItemButton}>Submit Edit</button>
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
									<span>
										{item.id} {item.name} {item.price}
									</span>
									<button onClick={() => handleClickItem(item)}>View</button>
								</div>
							);
						})}
					</section>
				) : (
					<section>
						<div>
							<span>
								{selectedItem.id} {selectedItem.name} {selectedItem.price}
							</span>
							<button onClick={() => handleClickDeleteItem(selectedItem)}>
								Delete
							</button>
							<button onClick={() => handleClickEditItem(selectedItem)}>
								Edit
							</button>
						</div>
					</section>
				)}
			</section>
		</div>
	);
}

export default App;
