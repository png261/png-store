import imagesLoaded from 'imagesloaded';
import Isotope from 'isotope-layout';
import React, { useEffect, useRef, useState } from 'react';
import { randomArray } from 'src/helper/array';
import useGetAllProducts from 'src/hooks/useGetProduct';
import { Filters, GridItems, Wrapper } from './GridProduct.styles';
import GridProductItem from './GridProductItem/GridProductItem';

const GridProducts = () => {
	const [countCategory, setCountCategory] = useState({});
	const [filterCategory, setFilterCategory] = useState('*');

	const products = useGetAllProducts();
	const isotope = useRef();
	const gutter = 40;

	useEffect(() => {
		const countCategories = () => {
			return products.reduce((count, { category }) => {
				category.map((cat) => (count[cat] = (count[cat] || 0) + 1));
				return count;
			}, {});
		};
		const initialIsotope = () => {
			isotope.current = new Isotope('.grid', {
				itemSelector: '.grid-item',
				percentPosition: true,
				masonry: {
					gutter,
					columnWidth: '.grid-item',
				},
			});
			new imagesLoaded('.grid', () => isotope.current.layout());
		};

		setCountCategory(countCategories());
		initialIsotope();

		return () => isotope.current.destroy();
	}, [products]);

	useEffect(() => {
		const handelFilterCategory = () => {
			filterCategory === '*'
				? isotope.current.arrange({ filter: `*` })
				: isotope.current.arrange({ filter: `.${filterCategory}` });
		};
		handelFilterCategory();
	}, [filterCategory]);

	const changeCategory = (category) => () => setFilterCategory(category);

	return (
		<Wrapper gutter={gutter}>
			{products.length > 0 && (
				<Filters>
					<button
						onClick={changeCategory('*')}
						className={filterCategory === '*' ? 'active' : ''}
					>
						All
						<sup>{products.length}</sup>
					</button>
					{Object.entries(countCategory).map(
						([category, count], i) => (
							<button
								key={i}
								onClick={changeCategory(category)}
								className={
									filterCategory === category ? 'active' : ''
								}
							>
								{category}
								<sup>{count}</sup>
							</button>
						)
					)}
				</Filters>
			)}

			<GridItems className="grid">
				{randomArray(products).map((product, i) => {
					const categories = product.category.join(' ');
					return (
						<GridProductItem
							key={i}
							product={product}
							className={`grid-item ${categories}`}
						/>
					);
				})}
			</GridItems>
		</Wrapper>
	);
};

export default GridProducts;
