import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loading from 'src/components/Loading/Loading';
import { PATH } from 'src/constants/paths';
const About = lazy(() => import('src/pages/About/About'));

const AboutRoutes = () => (
	<Switch>
		<Route exact path={PATH.ABOUT}>
			<Suspense fallback={<Loading />}>
				<About />
			</Suspense>
		</Route>
	</Switch>
);

export default AboutRoutes;
