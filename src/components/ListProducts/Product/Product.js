import { Link } from 'react-router-dom';
import BtnAddToCart from 'src/components/BtnAddToCart/BtnAddToCart';
import { PATH } from 'src/constants/paths';
import { Info, Thumb, Wrapper } from './Product.styles';

const Product = ({ product, ...props }) => {
	const { id, thumb, name, price } = product;

	return (
		<Wrapper {...props}>
			<Thumb>
				<img src={thumb} alt={name} />
			</Thumb>
			<Info className="product-info">
				<h3>
					<Link to={`${PATH.PRODUCT}/${id}`}>{name}</Link>
				</h3>
				<span>${price}.00</span>
				<BtnAddToCart productId={product.id} />
			</Info>
		</Wrapper>
	);
};

export default Product;
