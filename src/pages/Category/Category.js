import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ListProducts from 'src/components/ListProducts/ListProducts';
import useGetAllProducts from 'src/hooks/useGetProduct';
import { Wrapper } from './Category.styles';

const Category = () => {
	const { categoryId } = useParams();
	const [categoryProducts, setCategoryProducts] = useState([]);
	const allProducts = useGetAllProducts();

	useEffect(() => {
		const getCategoryProducts = () => {
			return allProducts.filter(({ category }) =>
				categoryId === 'all' ? true : category.includes(categoryId)
			);
		};
		setCategoryProducts(getCategoryProducts());
	}, [allProducts, categoryId]);

	return (
		<Wrapper>
			<h2>{categoryId}</h2>
			<small>Welcome to our shop!</small>
			<ListProducts products={categoryProducts} col={3} />
		</Wrapper>
	);
};

export default Category;
