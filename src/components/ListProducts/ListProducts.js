import { useEffect, useState } from 'react';
import { randomArray } from 'src/helper/array';
import { List } from './ListProducts.styles';
import Product from './Product/Product';

const ListProducts = ({ products, limit, excludeId, random, col = 4 }) => {
	const [listProducts, setListProducts] = useState(products);

	useEffect(() => {
		const handelCondition = () => {
			if (excludeId) {
				products = products.filter(({ id }) => id !== excludeId);
			}
			if (limit && limit > 0) {
				products = products.slice(0, limit);
			}
			if (random) {
				products = randomArray(products);
			}
			setListProducts(products);
		};
		handelCondition();
	}, [excludeId, products]);

	return (
		<List col={col}>
			{listProducts.length > 0 &&
				listProducts.map((product) => <Product product={product} />)}
		</List>
	);
};

export default ListProducts;
