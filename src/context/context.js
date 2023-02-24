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
				setItemQty(item.quantity++);
			}
		});
	};

	const decrementQuant = (id) => {
		numberCart.map((item) => {
			if (item.id === id) {
				if (item.quantity === 1) {
					return 1;
				} else {
					setItemQty(item.quantity--);
				}
			}
		});
	};

	const removeItem = (id) => {
		const filterItem = numberCart.filter((item) => item.id !== id);

		setNumberCart(filterItem);
	};

	return (
		<ContextProvider.Provider
			value={{
				numberCart,
				addItemToCart,
				incrementQuant,
				decrementQuant,
				removeItem,
			}}
		>
			{children}
		</ContextProvider.Provider>
	);
};
