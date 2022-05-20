import React from 'react';

const EditItemForm = (props) => {
    const { selectedItem, } = props;
	return (
		<div>
			<input type="text" name="name" />
            <input type="text" name="price" />
            <button>X</button>
            <button>Save</button>
		</div>
	);
};

export default EditItemForm;
