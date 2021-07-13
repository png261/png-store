import { useEffect } from 'react';
import { useState } from 'react';
import { Wrapper } from './Quantity.styles';

const Quantity = ({ callBack, initValue = 1, ...pops }) => {
	const [quantity, setQuantity] = useState(initValue);
	const [isMax, setIsMax] = useState(false);
	const [isMin, setIsMin] = useState(false);

	const changeQuantity = (newQuantity) => {
		if (!newQuantity) return setQuantity(1);

		newQuantity = Number(newQuantity);
		if (!newQuantity) return;
		if (newQuantity > 99 || newQuantity < 1) {
			return (newQuantity = quantity);
		}
		return setQuantity(newQuantity);
	};

	const increase = () => changeQuantity(quantity + 1);
	const decrease = () => changeQuantity(quantity - 1);
	const onChangeInput = (e) => changeQuantity(e.target.value);

	useEffect(() => {
		callBack(quantity);

		if (quantity === 99) setIsMax(true);
		if (quantity === 1) setIsMin(true);
		return () => {
			setIsMax(false);
			setIsMin(false);
		};
	}, [quantity]);
	return (
		<Wrapper {...pops}>
			<button onClick={decrease} disabled={isMin}>
				-
			</button>
			<input value={quantity} onChange={onChangeInput} />
			<button onClick={increase} disabled={isMax}>
				+
			</button>
		</Wrapper>
	);
};

export default Quantity;
