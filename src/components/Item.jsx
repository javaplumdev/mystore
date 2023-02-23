import React, { useContext } from 'react';
import { myStore } from '../data/data';
import { ContextProvider } from '../context/context';

const Item = () => {
	const { numberCart, addItemToCart } = useContext(ContextProvider);

	return (
		<div className="item-container">
			{myStore.map((item) => {
				return (
					<div key={item.id} className="item">
						<p>{item.name}</p>
						<button onClick={() => addItemToCart(item.id, item.name)}>
							Add to cart
						</button>
					</div>
				);
			})}
		</div>
	);
};

export default Item;
