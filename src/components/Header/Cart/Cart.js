import CartIcon from 'src/assets/images/cart.svg';
import { Number, Button } from './Cart.styles';
import { useSelector } from 'react-redux';

const Cart = () => {
	const cartList = useSelector((state) => state.cart);

	return (
		<Button to="/checkout">
			<img src={CartIcon} alt="cart icon" />
			{cartList.length > 0 && (
				<Number>
					<span>{cartList.length}</span>
				</Number>
			)}
		</Button>
	);
};

export default Cart;
