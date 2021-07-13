import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'src/components/Button/Button.styles';
import { PATH } from 'src/constants/paths';
import { Wrapper } from './Checkout.styles';
import TableCheckOut from './TableCheckOut/TableCheckOut';
import TotalCheckout from './TotalCheckOut/TotalCheckOut';

const Checkout = () => {
	const cartProducts = useSelector((state) => state.cart);

	return (
		<Wrapper>
			{cartProducts.length > 0 ? (
				<>
					<TableCheckOut cartProducts={cartProducts} />
					<TotalCheckout cartProducts={cartProducts} />
					<Button>Proceed to checkout</Button>
				</>
			) : (
				<>
					<p>Your cart is currently empty</p>
					<Link to={PATH.HOME}>
						<Button>Return to shop</Button>
					</Link>
				</>
			)}
		</Wrapper>
	);
};

export default Checkout;
