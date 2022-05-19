import React from 'react';

const SelectedItem = ( props ) => {
    const { selectedItem, handleClickDeleteItem, handleClickEditItem } = props;
	return (
		<section>
			<div>
				<span>
					{selectedItem.id} {selectedItem.name} {selectedItem.price}
				</span>
				<button onClick={() => handleClickDeleteItem(selectedItem)}>
					Delete
				</button>
				<button onClick={() => handleClickEditItem(selectedItem)}>Edit</button>
			</div>
		</section>
	);
};

export default SelectedItem;
