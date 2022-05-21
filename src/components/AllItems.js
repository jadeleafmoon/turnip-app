import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const AllItems = (props) => {
	const { items, handleClickViewButton } = props;
	return (
		<section className="item-list">
			{items.map((item) => {
				return (
					<div key={uuidv4()} className="item-card">
						<span>{item.owner}</span>
						<span>{item.name}</span>
						<span>{item.price}</span>
						<button onClick={() => handleClickViewButton(item)}>View</button>
					</div>
				);
			})}
		</section>
	);
};

export default AllItems;
