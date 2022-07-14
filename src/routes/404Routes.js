import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loading from 'src/components/Loading/Loading';
import { PATH } from 'src/constants/paths';
const Page404 = lazy(() => import('src/pages/Page404/Page404'));

const Routes = () => (
	<Switch>
		<Route exact path={PATH.PAGE404}>
			<Suspense fallback={<Loading />}>
				<Page404 />
			</Suspense>
		</Route>
	</Switch>
);

export default Routes;
