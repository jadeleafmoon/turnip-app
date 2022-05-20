import React from 'react';

const EditItemForm = (props) => {
    const { selectedItem, setIsEditing } = props;
	return (
		<div>
            <h2>Edit Item</h2>
			<input type="text" name="name" />
            <input type="text" name="price" />
            <button onClick={() => setIsEditing(false)}>X</button>
            <button>Save</button>
		</div>
	);
};

export default EditItemForm;
