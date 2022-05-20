import React from 'react';

const AddItemForm = (props) => {
	const {
		handleClickAddItem,
		handleAddItem,
		itemToAdd,
		setDisplayAddItem,
		setCurrentView,
		handleClickCancelAddItem
	} = props;
	return (
		<section>
			<h2>Add an Item</h2>
			<div>
				<p>Item name:</p>
				<input
					type="text"
					name="name"
					value={itemToAdd.name}
					onChange={(e) => handleAddItem(e)}
					required
				/>
			</div>

			<div>
				<p>Price:</p>
				<input
					type="text"
					name="price"
					value={itemToAdd.price}
					onChange={(e) => handleAddItem(e)}
					required
				/>
			</div>

			<div>
				<p>Description:</p>
				<textarea
					name="description"
					value={itemToAdd.description}
					onChange={(e) => handleAddItem(e)}
					required
				/>
			</div>

			<button onClick={handleClickCancelAddItem}>X</button>
			<button onClick={() => handleClickAddItem(itemToAdd)}>Done</button>
		</section>
	);
};

export default AddItemForm;
