import React, { useContext, useState } from 'react';

import { ContextProvider } from '../context/context';

const Cart = () => {
	const { numberCart, incrementQuant, decrementQuant, removeItem, grandTotal } =
		useContext(ContextProvider);

	return (
		<div>
			<p>Your cart</p>
			<p>{grandTotal}</p>
			{numberCart.map((item) => {
				return (
					<div key={item.id}>
						<p>{item.name}</p>
						<p>{item.price}</p>
						<p>{item.totalPrice}</p>
						<div style={{ display: 'flex' }}>
							<button onClick={() => decrementQuant(item.id)}>-</button>
							<p>{item.quantity}</p>
							<button onClick={() => incrementQuant(item.id)}>+</button>
						</div>
						<button onClick={() => removeItem(item.id)}>Remove</button>
					</div>
				);
			})}
		</div>
	);
};

export default Cart;
