import { Navbar, Item } from './components/index';
import { ContextFunction } from './context/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';

function App() {
	return (
		<ContextFunction>
			<div className="App">
				<Router>
					<Navbar />
					<Routes>
						<Route
							path="/"
							element={
								<>
									<Item />
								</>
							}
						/>
						<Route path="/cart" element={<Cart />} />
					</Routes>
				</Router>
			</div>
		</ContextFunction>
	);
}

export default App;
