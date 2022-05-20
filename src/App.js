/* eslint-disable */

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { checkValidItem } from './utils';

import Navbar from './components/Navbar';
import AddItemForm from './components/AddItemForm';
import HelloTest from './components/HelloTest';
import AllItems from './components/AllItems';
import SelectedItem from './components/SelectedItem';
import ButtonHome from './components/ButtonHome';
import InputReadOnly from './components/InputReadOnly';
import EditItemForm from './components/EditItemForm';
import MyInput from './components/MyInput';
import ButtonAddItem from './components/ButtonAddItem';

function App() {
	// State
	const [ color, setColor ] = useState('blue');
	const [ items, setItems ] = useState([]);
	const [ selectedItem, setSelectedItem ] = useState({
		name  : '',
		price : ''
	});
	const [ displayAddItem, setDisplayAddItem ] = useState(false);
	const [ editedItem, setEditedItem ] = useState('');
	const [ isEditing, setIsEditing ] = useState(false);

	const [ itemToAdd, setItemToAdd ] = useState({
		name  : '',
		price : ''
	});

	const [ currentView, setCurrentView ] = useState('home');
	const [ hello, setHello ] = useState('...blank...');

	const inputNameRef = useRef(null);
	const inputPriceRef = useRef(null);

	// Hooks
	useEffect(() => {
		console.log('First render.');
		handleDisplayAllItems();
	}, []);

	// Handlers
	const handleClickHomeButton = () => {
		handleDisplayAllItems();
		// setCurrentView("home");
		// setIsEditing(false);
	};

	const handleClickViewButton = (item) => {
		setSelectedItem(item);
		setCurrentView('single item');
	};

	const handleDisplayAllItems = () => {
		axios
			.get('/items')
			.then((response) => {
				setItems(response.data);
			})
			.then(() => setCurrentView('home'));
	};

	const handleAddItem = (e) => {
		e.preventDefault();

		const fieldName = e.target.getAttribute('name');
		const textValue = e.target.value;

		const newItem = {};
		newItem[fieldName] = textValue;
		setItemToAdd({ ...itemToAdd, ...newItem });
	};

	const handleClickAddItem = (item) => {
		const newItem = item;
		let isValidItem = checkValidItem(item);

		if (isValidItem) {
			axios
				.post('/items', item)
				.then((response) => {
					setCurrentView('home');
					// setDisplayAddItem(false);
					handleDisplayAllItems();
					setItemToAdd({ name: '', price: '' });
				})
				.catch((err) => console.log(err));
		} else {
			console.log('Fix your input!');
		}
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

	// Edit
	const handleClickEditItemButton = () => {
		setIsEditing(true);
		setCurrentView('edit item');
	};

	const handleClickSaveEditButton = (item) => {
		const id = item.id;
		// console.log('🔥 Save Button: Id', selectedItem.name);
		// console.log("💜 Save Button", inputNameRef.current.value, inputPriceRef.current.value);
		const newEdit = {
			name  : inputNameRef.current.value,
			price : inputPriceRef.current.value
		};

		axios
			.patch(`/items/${id}`, newEdit)
			.then((response) => {
				setIsEditing(false);
				handleDisplayAllItems();
			})
			.catch((err) => console.log(err));
	};

	// Render
	return (
		<div>
			<Navbar
				currentView={currentView}
				setCurrentView={setCurrentView}
				handleClickHomeButton={handleClickHomeButton}
			/>

			{currentView === 'home' ? (
				<section>
					<ButtonAddItem setCurrentView={setCurrentView} />
					<h2>Items (Good)</h2>
					<AllItems
						items={items}
						handleClickViewButton={handleClickViewButton}
					/>
				</section>
			) : null}

			{currentView === 'add item' ? (
				<section>
					<ButtonHome handleClickHomeButton={handleClickHomeButton} />
					<AddItemForm
						handleAddItem={handleAddItem}
						handleClickAddItem={handleClickAddItem}
						itemToAdd={itemToAdd}
						setItemToAdd={setItemToAdd}
						setDisplayAddItem={setDisplayAddItem}
					/>
				</section>
			) : null}

			{currentView === 'edit item' ? (
				<section>
					<ButtonHome handleClickHomeButton={handleClickHomeButton} />
					<EditItemForm
						setIsEditing={setIsEditing}
						selectedItem={selectedItem}
						handleClickSaveEditButton={handleClickSaveEditButton}
						inputNameRef={inputNameRef}
						inputPriceRef={inputPriceRef}
						setCurrentView={setCurrentView}
					/>
				</section>
			) : null}

			{currentView === 'single item' ? (
				<section>
					<ButtonHome handleClickHomeButton={handleClickHomeButton} />
					<h2>Single Item</h2>
					<SelectedItem
						selectedItem={selectedItem}
						handleClickDeleteItemButton={handleClickDeleteItemButton}
						handleClickEditItemButton={handleClickEditItemButton}
					/>
				</section>
			) : null}

			{/* {isEditing ? (
				<EditItemForm
					setIsEditing={setIsEditing}
					selectedItem={selectedItem}
					handleClickSaveEditButton={handleClickSaveEditButton}
					inputNameRef={inputNameRef}
					inputPriceRef={inputPriceRef}
				/>
			) : null} */}

			{/* <section>
				{currentView === 'home' ? (
					<section>
						<h2>Items (Delete)</h2>
						<AllItems
							items={items}
							handleClickViewButton={handleClickViewButton}
						/>
					</section>
				) : (
					<SelectedItem
						selectedItem={selectedItem}
						handleClickDeleteItemButton={handleClickDeleteItemButton}
						handleClickEditItemButton={handleClickEditItemButton}
					/>
				)}
			</section> */}
		</div>
	);
}

export default App;
