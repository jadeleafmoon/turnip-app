/* eslint-disable */

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

import Navbar from './components/Navbar';
import AddItemForm from './components/AddItemForm';
import HelloTest from './components/HelloTest';
import AllItems from './components/AllItems';
import SelectedItem from './components/SelectedItem';
import ButtonDisplayAllItems from './components/ButtonDisplayAllItems';
import InputReadOnly from './components/InputReadOnly';

function App() {
	// State
	const [ color, setColor ] = useState('blue');
	const [ items, setItems ] = useState([]);
	const [ selectedItem, setSelectedItem ] = useState('');
	const [ editedItem, setEditedItem ] = useState('');
	const [ isEditing, setIsEditing ] = useState(false);

	const [ itemToAdd, setItemToAdd ] = useState({
		name  : '',
		price : ''
	});

	const [ currentView, setCurrentView ] = useState('all items');
	const [ hello, setHello ] = useState('...blank...');

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
		axios
			.get('/items')
			.then((response) => {
				setItems(response.data);
			})
			.then(() => setCurrentView('all items'));
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

	const handleClickDeleteItemButton = (item) => {
		const id = item.id;

		axios
			.delete(`/items/${id}`)
			.then((response) => {
				handleDisplayAllItems();
			})
			.catch((err) => console.log(err));
	};

	const handleClickEditItemButton = (item) => {
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

		const fieldName = e.target.getAttribute('name');
		const textValue = e.target.value;

		const newItem = {};
		newItem[fieldName] = textValue;
		setItemToAdd({ ...itemToAdd, ...newItem });
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
			<AddItemForm
				handleClickAddItem={handleClickAddItem}
				itemToAdd={itemToAdd}
				setItemToAdd={setItemToAdd}
				handleEditItem={handleEditItem}
			/>

			{ isEditing ? <p>Editing</p> : <p>Not editing</p>}

			<section>
				<h2>Items</h2>
				<ButtonDisplayAllItems
					handleDisplayItemsClick={handleDisplayItemsClick}
				/>

				{currentView === 'all items' ? (
					<AllItems items={items} handleClickItem={handleClickItem} />
				) : (
					<SelectedItem
						selectedItem={selectedItem}
						handleClickDeleteItemButton={handleClickDeleteItemButton}
						handleClickEditItemButton={handleClickEditItemButton}
					/>
				)}
			</section>
		</div>
	);
}

export default App;
