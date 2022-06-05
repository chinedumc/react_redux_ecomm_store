import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { removeSelectedProduct, selectedProduct } from "../../Redux/Actions/ProductAction";

const ProductDetail = () => {
	const product = useSelector((state) => state.product);
	const { productId } = useParams();
	// console.log(productId)
	const { image, title, price, category, description } = product;
	const dispatch = useDispatch();
	const fetchProductDetail = async () => {
		const response = await axios
			.get(`https://fakestoreapi.com/products/${productId}`)
			.catch((err) => {
				console.log("Err", err);
			});
      // console.log((response.data), "response")
		dispatch(selectedProduct(response.data));
	};

	useEffect(() => {
		if (productId && productId !== "") fetchProductDetail();
		return () => {
			dispatch(removeSelectedProduct())
		}
	}, [productId]);

	return (
		<div className="ui grid container">
			{Object.keys(product).length === 0 ? (
				<div>
					<h1>...Loading</h1>
				</div>
			) : (
        <>
				<div className="ui placeholder segment">
					<div className="ui two column stackable center aligned grid">
						<div className="ui vertical divider">AND</div>
						<div className="middle aligned row">
							<div className="column lp">
								<img src={image} alt={title} className="ui fluid image" />
							</div>
							<div className="column rp">
								<h1>{title}</h1>
								<h2>
									<p className="ui teal tag label">${price}</p>
								</h2>
								<h3 className="ui brown block header">{category}</h3>
								<p>{description}</p>
								<div className="ui vertical animated button" tabIndex={0}>
									<div className="hidden content">
										<i className="shop icon"></i>
									</div>
									<div className="visible content">Add to Cart</div>
								</div>
							</div>
						</div>
					</div>
				</div>
        </>
			)}
		</div>
	);
};

export default ProductDetail;
