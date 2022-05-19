import React from 'react';

const AddItemField = (props) => {
    const { handleClickAddItem, itemNameRef, itemPriceRef } = props;
	return (
		<section>
			<h2>Add an Item</h2>
			<label>
				<input type="text" name="item-name" ref={itemNameRef} />
			</label>

			<label>
				<input type="text" name="item-price" ref={itemPriceRef} />
			</label>

			<button onClick={handleClickAddItem}>Add Item</button>
		</section>
	);
};

export default AddItemField;
