import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeProduct, updateProduct } from 'src/actions/cart';
import Quantity from 'src/components/Quantity/Quantity';
import { PATH } from 'src/constants/paths';
import db, { COLLECTION_IDS } from 'src/firebase/firebase';
import { ProductThumb, RemoveButton, Wrapper } from './TableItem.styles';

const TableItem = ({ cartProduct }) => {
	const [product, setProduct] = useState({});
	const dispatch = useDispatch();

	const updateQuantity = (newQuantity) => {
		const productUpdate = {
			...cartProduct,
			quantity: newQuantity,
		};

		const action = updateProduct(productUpdate);
		dispatch(action);
	};

	const onClickRemoveProduct = () => {
		const action = removeProduct(cartProduct.id);
		dispatch(action);
	};

	useEffect(() => {
		db.collection(COLLECTION_IDS.PRODUCTS)
			.doc(cartProduct.id)
			.onSnapshot((snapshot) => {
				setProduct({ id: snapshot.id, ...snapshot.data() });
			});
	}, []);

	return (
		<Wrapper>
			<td>
				<ProductThumb to={`${PATH.PRODUCT}/${product.id}`}>
					<img src={product.thumb} alt={product.name} />
				</ProductThumb>
			</td>
			<td>
				<Link to={`${PATH.PRODUCT}/${product.id}`}>{product.name}</Link>
			</td>
			<td>${product.price}.00</td>
			<td>
				<Quantity
					callBack={updateQuantity}
					initValue={product.quantity}
					width={80}
				/>
			</td>
			<td>${cartProduct.quantity * product.price}.00</td>
			<td>
				<RemoveButton onClick={onClickRemoveProduct}>×</RemoveButton>
			</td>
		</Wrapper>
	);
};

export default TableItem;
