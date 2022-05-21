import React from 'react';

const AddItemForm = (props) => {
	const {
		handleClickAddItem,
		handleAddItem,
		itemToAdd,
		setDisplayAddItem,
		setCurrentView,
		handleClickCancelAddItem,
		currentUser
	} = props;
	return (
		<section className="add-item-section">
			<h3 className="subtitle">What would you like to sell?</h3>
			{/* <div>
				<p>Owner:</p>
				<p>{currentUser}</p>
			</div> */}
			<div>
				<p>
					<b>Item name:</b>
				</p>
				<input
					type="text"
					name="name"
					value={itemToAdd.name}
					onChange={(e) => handleAddItem(e)}
					required
				/>
			</div>

			<div>
				<p>
					<b>Price:</b>
				</p>
				<input
					type="text"
					name="price"
					value={itemToAdd.price}
					onChange={(e) => handleAddItem(e)}
					required
				/>
			</div>

			<div>
				<p>
					<b>Description:</b>
				</p>
				<textarea
					name="description"
					value={itemToAdd.description}
					onChange={(e) => handleAddItem(e)}
					required
				/>
			</div>
			<div className="bottom-buttons-bar">
				<button onClick={handleClickCancelAddItem}>Cancel</button>
				<button onClick={() => handleClickAddItem(itemToAdd)}>Done</button>
			</div>
		</section>
	);
};

export default AddItemForm;
