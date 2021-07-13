import { useState } from 'react';
import {
	FacebookShareButton,
	LinkedinShareButton,
	PinterestShareButton,
	TwitterShareButton,
} from 'react-share';
import BtnAddToCart from 'src/components/BtnAddToCart/BtnAddToCart';
import Quantity from 'src/components/Quantity/Quantity';
import { PATH } from 'src/constants/paths';
import {
	AddToCart,
	Categories,
	Category,
	Price,
	Socials,
	Wrapper,
} from './ProductSummary.styles';

const ProductSummary = ({ product }) => {
	const { id, name, price, sum, category } = product;
	const [quantity, setQuantity] = useState(1);
	const shareUrl = window.location.href;

	return (
		<Wrapper>
			<h1>{name}</h1>
			<Price>${price}.00</Price>
			<p>{sum}</p>
			<AddToCart>
				<Quantity callBack={setQuantity} />
				<BtnAddToCart productId={id} quantity={quantity} />
			</AddToCart>
			{category && (
				<Categories>
					<span>Categories:</span>
					<Category to={`${PATH.CATEGORY}/all`}>All</Category>
					{category.map((cat) => (
						<Category to={`${PATH.CATEGORY}/${cat}`}>
							{cat}
						</Category>
					))}
				</Categories>
			)}

			<Socials>
				<FacebookShareButton url={shareUrl}>
					<i className="fa fa-facebook"></i>
				</FacebookShareButton>
				<LinkedinShareButton url={shareUrl}>
					<i className="fa fa-linkedin"></i>
				</LinkedinShareButton>
				<TwitterShareButton url={shareUrl}>
					<i className="fa fa-twitter"></i>
				</TwitterShareButton>
				<PinterestShareButton url={shareUrl}>
					<i className="fa fa-pinterest"></i>
				</PinterestShareButton>
			</Socials>
		</Wrapper>
	);
};

export default ProductSummary;
