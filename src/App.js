import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/header/header.component";
import "./App.css";
import ProductListing from "./Components/productListing/productListing.component";
import ProductDetail from "./Components/productDetail/productDetail.component";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route path="/" exact element={<ProductListing />} />
					<Route path="/product/:productId" exact element={<ProductDetail />} />
					{/* <Route path='*' element={<PageNotFound />} /> */}
					<Route>PageNotFound </Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
