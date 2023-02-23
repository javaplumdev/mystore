import React, { useContext, useState } from 'react';

import { ContextProvider } from '../context/context';

const Cart = () => {
	const { numberCart, incrementQuant } = useContext(ContextProvider);

	return (
		<div>
			<p>Your cart</p>
			{numberCart.map((item) => {
				return (
					<div key={item.id}>
						<p>{item.name}</p>
						<div style={{ display: 'flex' }}>
							<button>-</button>
							<p>{0}</p>
							<button onClick={() => incrementQuant(item.id)}>+</button>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Cart;
