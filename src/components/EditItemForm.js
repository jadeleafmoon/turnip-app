import React from 'react';

const EditItemForm = (props) => {
	const {
		selectedItem,
		setIsEditing,
		handleClickSaveEditButton,
		inputNameRef,
		inputPriceRef,
        inputDescriptionRef,
		setCurrentView
	} = props;
	return (
		<div>
			<h2>Edit Item</h2>
			<div>
                <p>Item name:</p>
				<input
					type="text"
					name="name"
					defaultValue={selectedItem.name}
					ref={inputNameRef}
				/>
			</div>
			<div>
                <p>Price:</p>
				<input
					type="text"
					name="price"
					defaultValue={selectedItem.price}
					ref={inputPriceRef}
				/>
			</div>
			<div>
                <p>Description:</p>
				<textarea
					name="description"
					defaultValue={selectedItem.description}
					ref={inputDescriptionRef}
				/>
			</div>

			<button onClick={() => setCurrentView('home')}>X</button>
			<button onClick={() => handleClickSaveEditButton(selectedItem)}>
				Save
			</button>
		</div>
	);
};

export default EditItemForm;
