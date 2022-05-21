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
import ButtonSelectUser from './components/ButtonSelectUser';
import ButtonBuy from './components/ButtonBuy';

const dbURL = 'https://turnip-api-2.herokuapp.com';

function App() {
	// State
	const [ currentUser, setCurrentUser ] = useState('Bob');
	const [ items, setItems ] = useState([]);
	const [ selectedItem, setSelectedItem ] = useState({
		name        : '',
		price       : '',
		owner       : currentUser,
		description : ''
	});
	const [ displayAddItem, setDisplayAddItem ] = useState(false);
	const [ editedItem, setEditedItem ] = useState('');
	const [ isEditing, setIsEditing ] = useState(false);

	const [ itemToAdd, setItemToAdd ] = useState({
		name        : '',
		price       : '',
		owner       : currentUser,
		description : ''
	});
	const [ itemWasBought, setItemWasBought ] = useState(false);
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

	const resetState = () => {
		setItemWasBought(false);
		setItemToAdd({
			name        : '',
			price       : '',
			owner       : currentUser,
			description : ''
		});
	};

	const handleClickHomeButton = () => {
		handleDisplayAllItems();
		resetState();
	};

	const handleClickViewButton = (item) => {
		setSelectedItem(item);
		setCurrentView('single item');
	};

	const handleDisplayAllItems = () => {
		axios
			.get(`${dbURL}/items`)
			.then((response) => {
				setItems(response.data);
				console.log(`🔥 Get using ${dbURL}/items`);
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
		const newItem = { ...item, owner: currentUser };
		console.log('💜 Item to add:', newItem);

		let isValidItem = checkValidItem(item);

		if (isValidItem) {
			console.log(`🔥 POST with ${dbURL}`);
			axios
				.post(`${dbURL}/items`, newItem)
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
		console.log(`🔥 DELETE with ${dbURL}`);

		axios
			.delete(`${dbURL}/items/${id}`)
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
		console.log(`🔥 PATCH with ${dbURL}`);
		console.log('💜 Item patch:', newEdit);

		if (isValidItem) {
			axios
				.patch(`${dbURL}/items/${id}`, newEdit)
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

	const handleClickBuy = () => {
		const id = selectedItem.id;
		const newOwner = {
			owner : currentUser
		};

		setSelectedItem({ ...selectedItem, ...newOwner });

		axios
			.patch(`${dbURL}/items/${id}`, newOwner)
			.then((response) => {
				setItemWasBought(true);
			})
			.catch((err) => console.log(err));
	};

	// const handleTest = () => {
	// 	axios.get('https://jsonplaceholder.typicode.com/todos/2').then((data) => {
	// 		console.log('🔥 axios test', data.data);
	// 	});
	// };

	// Render
	return (
		<main id="main-wrapper">
			<Navbar
				currentView={currentView}
				setCurrentView={setCurrentView}
				handleClickHomeButton={handleClickHomeButton}
			/>

			<section id="body-wrapper">

			

			{currentView === 'home' ? (
				<section>
					<div className="button-bar">
						<ButtonHome handleClickHomeButton={handleClickHomeButton} color={"on"}/>
						<ButtonMyProfile
							setCurrentView={setCurrentView}
							handleClickMyProfileButton={handleClickMyProfileButton}
						/>
						<ButtonAddItem setCurrentView={setCurrentView} />
						<ButtonSelectUser setCurrentUser={setCurrentUser} />
						<span>{<h3> {currentUser} </h3>}</span>
					</div>
					<h3 className="subtitle">All Items</h3>
					<AllItems
						items={items}
						handleClickViewButton={handleClickViewButton}
					/>
				</section>
			) : null}

			{currentView === 'add item' ? (
				<section>
					<div className="button-bar">
						<ButtonHome handleClickHomeButton={handleClickHomeButton} />
						<ButtonMyProfile
							setCurrentView={setCurrentView}
							handleClickMyProfileButton={handleClickMyProfileButton}
						/>
						<ButtonAddItem setCurrentView={setCurrentView} color={"on"}/>
						<span>{<h3> {currentUser} </h3>}</span>
					</div>
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
					<div className="button-bar">
						<ButtonHome handleClickHomeButton={handleClickHomeButton} />
						<ButtonMyProfile
							setCurrentView={setCurrentView}
							handleClickMyProfileButton={handleClickMyProfileButton}
						/>
						<span>{<h3> {currentUser} </h3>}</span>
					</div>
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
					<div className="button-bar">
						<ButtonHome handleClickHomeButton={handleClickHomeButton} />
						<ButtonMyProfile
							setCurrentView={setCurrentView}
							handleClickMyProfileButton={handleClickMyProfileButton}
						/>
						<div> </div>
						<div> </div>
						<span>{<h3> {currentUser} </h3>}</span>
					</div>

					<h3>Single Item</h3>
					<SelectedItem
						selectedItem={selectedItem}
						handleClickDeleteItemButton={handleClickDeleteItemButton}
						handleClickEditItemButton={handleClickEditItemButton}
						currentUser={currentUser}
						handleClickBuy={handleClickBuy}
						itemWasBought={itemWasBought}
					/>
				</section>
			) : null}

			{currentView === 'my profile' ? (
				<section>
					<div className="button-bar">
						<ButtonHome handleClickHomeButton={handleClickHomeButton} />
						<ButtonMyProfile
							setCurrentView={setCurrentView}
							handleClickMyProfileButton={handleClickMyProfileButton}
							color={"on"}
						/>
						<ButtonAddItem setCurrentView={setCurrentView} />
						<div> </div>
						<span>{<h3> {currentUser} </h3>}</span>
					</div>
					
					<h3 className="subtitle">Welcome {currentUser}! These are your items.</h3>
					<AllItemsByOwner
						currentUser={currentUser}
						items={items}
						handleClickViewButton={handleClickViewButton}
					/>
				</section>
			) : null}
			</section>
		</main>
	);
}

export default App;
