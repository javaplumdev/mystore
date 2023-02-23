import React, { useContext } from 'react';
import { ContextProvider } from '../context/context';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const { numberCart } = useContext(ContextProvider);

	return (
		<div className="nav">
			<p>Navbar</p>
			<Link to="/cart">My Cart: {numberCart.length}</Link>
		</div>
	);
};

export default Navbar;
