import ListProducts from 'src/components/ListProducts/ListProducts';
import useGetAllProducts from 'src/hooks/useGetProduct';
import { Wrapper } from './RelatedProducts.styles';

const RelatedProducts = ({ currentProduct }) => {
	const products = useGetAllProducts();

	return (
		<Wrapper>
			<h2>Other Products</h2>
			<ListProducts
				products={products}
				excludeId={currentProduct.id}
				limit={4}
				random
			/>
		</Wrapper>
	);
};

export default RelatedProducts;
