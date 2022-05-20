import React from 'react';

const EditItemForm = (props) => {
    const { selectedItem, setIsEditing, handleClickSaveEditButton, inputNameRef, inputPriceRef } = props;
	return (
		<div>
            <h2>Edit Item</h2>
			<input 
                type="text" 
                name="name" 
                defaultValue={selectedItem.name}
                ref={inputNameRef}
            />
            <input 
                type="text" 
                name="price" 
                defaultValue={selectedItem.price}
                ref={inputPriceRef}
            />
            <button onClick={() => setIsEditing(false)}>X</button>
            <button onClick={() => handleClickSaveEditButton(selectedItem)}>Save</button>
		</div>
	);
};

export default EditItemForm;
