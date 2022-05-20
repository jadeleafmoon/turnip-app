import React from 'react';

const AddItemForm = (props) => {
	const { handleClickAddItem, handleAddItem, itemToAdd } = props;
	return (
		<section>
			<h2>Add an Item</h2>
			<label>
				<input 
                    type="text" 
                    name="name"
                    value={itemToAdd.name} 
                    onChange={(e) => handleAddItem(e)} 
                />
			</label>

			<label>
				<input 
                    type="text" 
                    name="price"
                    value={itemToAdd.price} 
                    onChange={(e) => handleAddItem(e)} 
                />
			</label>

            <button>X</button>
			<button onClick={handleClickAddItem}>Add Item</button>
            {/* <h3>Name: { itemToAdd.name } Price:{ itemToAdd.price }</h3> */}
        </section>
	);
};

export default AddItemForm;
