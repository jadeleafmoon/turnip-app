import React from 'react';

const AddItemForm = (props) => {
	const { handleClickAddItem, handleAddItem, itemToAdd, setDisplayAddItem } = props;
	return (
		<section>
			<h2>Add an Item</h2>
			<label>
				<input 
                    type="text" 
                    name="name"
                    value={itemToAdd.name} 
                    onChange={(e) => handleAddItem(e)}
                    required
                />
			</label>

			<label>
				<input 
                    type="text" 
                    name="price"
                    value={itemToAdd.price} 
                    onChange={(e) => handleAddItem(e)}
                    required
                />
			</label>

            <button onClick={() => setDisplayAddItem(false)}>X</button>
			<button onClick={() => handleClickAddItem(itemToAdd)}>Done</button>
        </section>
	);
};

export default AddItemForm;
