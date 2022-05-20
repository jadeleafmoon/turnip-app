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
import ButtonMyProfile from './components/ButtonMyProfile';
import AllItemsByOwner from './components/AllItemsByOwner';

function App() {
	// State
	const [ currentUser, setCurrentUser ] = useState('Bob');
	const [ items, setItems ] = useState([]);
	const [ selectedItem, setSelectedItem ] = useState({
		name        : '',
		price       : '',
		ownmer      : currentUser,
		description : ''
	});
	const [ displayAddItem, setDisplayAddItem ] = useState(false);
	const [ editedItem, setEditedItem ] = useState('');
	const [ isEditing, setIsEditing ] = useState(false);

	const [ itemToAdd, setItemToAdd ] = useState({
		name        : '',
		price       : '',
		ownmer      : currentUser,
		description : ''
	});

	const [ hello, setHello ] = useState('...blank...');
	const [ currentView, setCurrentView ] = useState('home');

	const inputNameRef = useRef(null);
	const inputPriceRef = useRef(null);
	const inputDescriptionRef = useRef(null);

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
		console.log('💜 Item to add:', item);
		let isValidItem = checkValidItem(item);

		if (isValidItem) {
			axios
				.post('/items', item)
				.then((response) => {
					// setDisplayAddItem(false);
					handleDisplayAllItems();
				})
				.then(() => setCurrentView('home'))
				.then(() =>
					setItemToAdd({
						name        : '',
						price       : '',
						owner       : currentUser,
						description : ''
					})
				)
				.catch((err) => console.log(err));
		} else {
			console.log('Fix your input!', item);
		}
	};

	const handleClickCancelAddItem = () => {
		setItemToAdd({
			name        : '',
			price       : '',
			owner       : currentUser,

			description : ''
		});
		setCurrentView('home');
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

		const newEdit = {
			name        : inputNameRef.current.value,
			price       : inputPriceRef.current.value,
			description : inputDescriptionRef.current.value
		};

		let isValidItem = checkValidItem(newEdit);

		if (isValidItem) {
			axios
				.patch(`/items/${id}`, newEdit)
				.then((response) => {
					setIsEditing(false);
					handleDisplayAllItems();
				})
				.catch((err) => console.log(err));
		} else {
			console.log('Fix your input!', newEdit);
		}
	};

	const handleClickMyProfileButton = () => {
		setCurrentView('my profile');
	};

	// Render
	return (
		<div>
			<Navbar
				currentView={currentView}
				setCurrentView={setCurrentView}
				handleClickHomeButton={handleClickHomeButton}
			/>
			{<h2>User: {currentUser} </h2>}

			{currentView === 'home' ? (
				<section>
					<ButtonMyProfile
						setCurrentView={setCurrentView}
						handleClickMyProfileButton={handleClickMyProfileButton}
					/>
					<ButtonAddItem setCurrentView={setCurrentView} />
					<h2>All Items</h2>
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
						setCurrentView={setCurrentView}
						handleClickCancelAddItem={handleClickCancelAddItem}
						currentUser={currentUser}
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
						inputDescriptionRef={inputDescriptionRef}
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
						currentUser={currentUser}
					/>
				</section>
			) : null}

			{currentView === 'my profile' ? (
				<section>
					<ButtonHome handleClickHomeButton={handleClickHomeButton} />
					<ButtonAddItem setCurrentView={setCurrentView} />
					<h2>Welcome {currentUser}! These are your items.</h2>
					<AllItemsByOwner
						currentUser={currentUser}
						items={items}
						handleClickViewButton={handleClickViewButton}
					/>
				</section>
			) : null}
		</div>
	);
}

export default App;
