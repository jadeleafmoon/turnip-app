import React from 'react';
import ButtonBuy from './ButtonBuy';

const SelectedItem = (props) => {
	const {
		selectedItem,
		handleClickDeleteItemButton,
		handleClickEditItemButton,
		currentUser,
		handleClickBuy,
		itemWasBought
	} = props;
	return (
		<section>
			<div>
				{itemWasBought && <h3 className="subtitle">You bought the item!</h3>}
				<div className="item-card items-top-row">
					<span>Owner</span>
					<span>Item Name</span>
					<span>Price</span>
					<span>Description</span>
				</div>
				<span className="item-card">
					<p>{selectedItem.owner}</p>
					<p>{selectedItem.name}</p>
					<p>{selectedItem.price}</p>
					<p>{selectedItem.description}</p>
				</span>
				{selectedItem.owner === currentUser ? (
					<div className="bottom-buttons-bar">
						<button onClick={() => handleClickDeleteItemButton(selectedItem)}>
							Delete
						</button>
						<button onClick={() => handleClickEditItemButton(selectedItem)}>
							Edit
						</button>
					</div>
				) : (
					<ButtonBuy handleClickBuy={handleClickBuy} />
				)}
			</div>
		</section>
	);
};

export default SelectedItem;
