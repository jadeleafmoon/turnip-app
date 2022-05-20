import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const AllItems = (props) => {
	const { items, handleClickViewButton } = props;
	return (
		<section>
			{items.map((item) => {
				return (
					<div key={uuidv4()}>
						<span>
							{ item.owner} - { item.name } - { item.price }
						</span>
						<button onClick={() => handleClickViewButton(item)}>View</button>
					</div>
				);
			})}
		</section>
	);
};

export default AllItems;
