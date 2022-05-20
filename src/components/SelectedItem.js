import React from 'react';

const SelectedItem = ( props ) => {
    const { selectedItem, handleClickDeleteItemButton, handleClickEditItemButton } = props;
	return (
		<section>
			<div>
				<span>
					{selectedItem.id} {selectedItem.name} {selectedItem.price}
				</span>
				<button onClick={() => handleClickDeleteItemButton(selectedItem)}>
					Delete
				</button>
				<button onClick={() => handleClickEditItemButton(selectedItem)}>Edit</button>
			</div>
		</section>
	);
};

export default SelectedItem;
