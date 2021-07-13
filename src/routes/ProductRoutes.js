import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loading from 'src/components/Loading/Loading';
import { PATH } from 'src/constants/paths';
const Product = lazy(() => import('src/pages/Product/Product'));
const Category = lazy(() => import('src/pages/Category/Category'));
const Checkout = lazy(() => import('src/pages/Checkout/Checkout'));

const ProductRoutes = () => (
	<Switch>
		<Route exact path={`${PATH.PRODUCT}/:productId`}>
			<Suspense fallback={<Loading />}>
				<Product />
			</Suspense>
		</Route>
		<Route exact path={`${PATH.CATEGORY}/:categoryId`}>
			<Suspense fallback={<Loading />}>
				<Category />
			</Suspense>
		</Route>
		<Route exact path={PATH.CHECKOUT}>
			<Suspense fallback={<Loading />}>
				<Checkout />
			</Suspense>
		</Route>
	</Switch>
);

export default ProductRoutes;
