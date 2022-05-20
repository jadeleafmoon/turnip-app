import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const AllItemsByOwner = (props) => {
	const { items, handleClickViewButton, currentUser } = props;
	return (
		<section>
			{console.log('🔥 items', items)}
			{items.filter((item) => item.owner === currentUser).map((item) => {
				return (
					<div key={uuidv4()}>
						<span>
							{item.name} {item.price}
						</span>
						<button onClick={() => handleClickViewButton(item)}>View</button>
					</div>
				);
			})}
		</section>
	);
};

export default AllItemsByOwner;