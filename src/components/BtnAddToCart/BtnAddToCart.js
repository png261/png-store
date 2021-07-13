import { addProduct, removeProduct } from 'src/actions/cart';
import { useDispatch } from 'react-redux';
import Button from 'src/components/Button/Button.styles';
import { useSelector } from 'react-redux';

const BtnAddToCart = ({ productId, quantity = 1, ...props }) => {
	const dispatch = useDispatch();
	const cartProductIds = useSelector((state) => state.cart);
	const isAdded = cartProductIds.some(({ id }) => id === productId);
	const addToCart = () => {
		if (quantity < 1) return;

		const action = isAdded
			? removeProduct(productId)
			: addProduct({ id: productId, quantity: quantity });
		dispatch(action);
	};

	return (
		<Button onClick={addToCart} {...props}>
			{isAdded ? 'Remove from cart' : 'Add to cart'}
		</Button>
	);
};

export default BtnAddToCart;
