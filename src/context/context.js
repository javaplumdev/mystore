import { createContext, useState } from 'react';

export const ContextProvider = createContext();

export const ContextFunction = ({ children }) => {
	const [numberCart, setNumberCart] = useState([]);
	const [itemQty, setItemQty] = useState(0);

	const addItemToCart = (id, name) => {
		const itemExist = numberCart.find((item) => item.id === id);

		if (itemExist) {
			console.log('Item already added ');
		} else {
			setNumberCart((prevState) => [
				...prevState,
				{ id: id, name: name, quantity: 1 },
			]);
			console.log('Item added');
		}
	};

	const incrementQuant = (id) => {
		numberCart.map((item) => {
			if (item.id === id) {
				console.log(item);
				setItemQty(item.quantity++);
			}
		});
	};

	return (
		<ContextProvider.Provider
			value={{ numberCart, addItemToCart, incrementQuant }}
		>
			{children}
		</ContextProvider.Provider>
	);
};
