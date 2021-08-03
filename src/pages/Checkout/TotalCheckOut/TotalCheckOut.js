import { useEffect, useState } from 'react';
import useGetAllProducts from 'src/hooks/useGetProduct';
import { Table, Wrapper } from './TotalCheckOut.styles';

const TotalCheckOut = ({ cartProducts }) => {
	const allProducts = useGetAllProducts();
	const [subTotal, setSubTotal] = useState(0);
	const shippingPrice = 20;

	useEffect(() => {
		const getSubTotal = () => {
			if (!allProducts) return 0;

			const products = allProducts
				.filter(({ id }) =>
					cartProducts.some((cartProduct) =>
						cartProduct.id.includes(id)
					)
				)
				.map(({ id, price }) => {
					const quantity = cartProducts.find(
						(cartProduct) => id === cartProduct.id
					).quantity;
					return { quantity, price };
				});

			const subTotal = products.reduce(
				(total, { quantity, price }) => total + price * quantity,
				0
			);

			return subTotal;
		};

		setSubTotal(getSubTotal());
	}, [allProducts, cartProducts]);

	return (
		<Wrapper>
			<h2>Cart totals</h2>

			<Table>
				<tr>
					<th>SubTotal</th>
					<td>${subTotal},00</td>
				</tr>
				<tr>
					<th>Shipping price</th>
					<td>+${shippingPrice},00</td>
				</tr>
				<tr>
					<th>Total</th>
					<td>
						<strong>${subTotal + shippingPrice},00</strong>
					</td>
				</tr>
			</Table>
		</Wrapper>
	);
};

export default TotalCheckOut;
