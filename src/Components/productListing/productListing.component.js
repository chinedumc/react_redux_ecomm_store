import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "../product/product.component";
import { setProducts } from "../../Redux/Actions/ProductAction";

const ProductListing = () => {
	const products = useSelector((state) => state.allProducts.products);
	const dispatch = useDispatch();

	const fetchProducts = async () => {
		const response = await axios
			.get("https://fakestoreapi.com/products")
			.catch((err) => {
				console.log("Err", err);
			});
		dispatch(setProducts(response.data));
	};

	useEffect(() => {
		fetchProducts();
	}, []);
	console.log('product: ',products)
	return (
		<div className="ui grid container">
			<ProductComponent />
		</div>
	);
};

export default ProductListing;
