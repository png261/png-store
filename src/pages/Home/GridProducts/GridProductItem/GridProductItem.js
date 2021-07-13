import { PATH } from 'src/constants/paths';
import { Wrapper, Thumb, Info } from './GridProductItem.styles';

const GridProductItem = ({ product: { id, name, thumb, price }, ...props }) => {
	return (
		<Wrapper to={`${PATH.PRODUCT}/${id}`} {...props}>
			<Thumb>
				<img src={thumb} alt={name} />
			</Thumb>
			<Info className="info">
				<h2>{name}</h2>
				<span>${price}.00</span>
			</Info>
		</Wrapper>
	);
};

export default GridProductItem;
