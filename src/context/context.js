import { createContext, useState } from 'react';
import { myStore } from '../data/data';
export const ContextProvider = createContext();

export const ContextFunction = ({ children }) => {
	const [numberCart, setNumberCart] = useState([]);
	const [itemQty, setItemQty] = useState(0);
	const [grandTotal, setGrandTotal] = useState(0);

	const addItemToCart = (id, name) => {
		const itemExist = numberCart.find((item) => item.id === id);

		if (itemExist) {
			console.log('Item already added ');
		} else {
			const item = myStore.find((item) => item.id === id);

			setNumberCart((prevState) => [
				...prevState,
				{
					id: id,
					name: name,
					quantity: 1,
					price: item.price,
					totalPrice: item.totalPrice,
				},
			]);

			numberCart.map((item) => {
				if (item.id === id) {
					setItemQty(item.quantity++);

					item.totalPrice = item.price * item.quantity;
				}
			});

			console.log('Item added');
		}

		var total = numberCart.reduce(function (prev, cur) {
			return prev + cur.totalPrice;
		}, 0);

		setGrandTotal(total);
	};

	const incrementQuant = (id) => {
		numberCart.map((item) => {
			if (item.id === id) {
				setItemQty(item.quantity++);

				item.totalPrice = item.price * item.quantity;
			}
		});

		var total = numberCart.reduce(function (prev, cur) {
			return prev + cur.totalPrice;
		}, 0);

		setGrandTotal(total);
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
				grandTotal,
			}}
		>
			{children}
		</ContextProvider.Provider>
	);
};
