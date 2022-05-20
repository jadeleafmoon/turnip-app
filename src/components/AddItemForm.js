import React from 'react';

const AddItemForm = (props) => {
	const { handleClickAddItem, handleEditItem, itemToAdd, setItemToAdd } = props;
	return (
		<section>
			<h2>Add an Item</h2>
			<label>
				<input 
                    type="text" 
                    name="name"
                    value={itemToAdd.name} 
                    onChange={(e) => handleEditItem(e)} 
                />
			</label>

			<label>
				<input 
                    type="text" 
                    name="price"
                    value={itemToAdd.price} 
                    onChange={(e) => handleEditItem(e)} 
                />
			</label>

			<button onClick={handleClickAddItem}>Add Item</button>
            <h3>Name: { itemToAdd.name } Price:{ itemToAdd.price }</h3>
        </section>
	);
};

export default AddItemForm;
