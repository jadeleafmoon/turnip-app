import React from 'react';

const SelectedItem = (props) => {
	const {
		selectedItem,
		handleClickDeleteItemButton,
		handleClickEditItemButton,
		currentUser
	} = props;
	return (
		<section>
			<div>
				<span>
					<p>{selectedItem.id}</p>
					<p>{selectedItem.name}</p>
					<p>{selectedItem.price}</p>
					<p>{selectedItem.owner}</p>
					<p>{selectedItem.description}</p>
				</span>
				{selectedItem.owner === currentUser ? (
					<div>
						<button onClick={() => handleClickDeleteItemButton(selectedItem)}>
							Delete
						</button>
						<button onClick={() => handleClickEditItemButton(selectedItem)}>
							Edit
						</button>
					</div>
				) : null}
			</div>
		</section>
	);
};

export default SelectedItem;
