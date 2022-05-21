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
				{itemWasBought && <h2>You bought the item!</h2>}
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
				) : <ButtonBuy handleClickBuy={handleClickBuy} />}
			</div>
		</section>
	);
};

export default SelectedItem;
