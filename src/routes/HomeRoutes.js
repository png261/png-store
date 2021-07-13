import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loading from 'src/components/Loading/Loading';
import { PATH } from 'src/constants/paths';
const Home = lazy(() => import('src/pages/Home/Home'));

const HomeRoutes = () => (
	<Switch>
		<Route exact path={PATH.HOME}>
			<Suspense fallback={<Loading />}>
				<Home />
			</Suspense>
		</Route>
	</Switch>
);

export default HomeRoutes;
