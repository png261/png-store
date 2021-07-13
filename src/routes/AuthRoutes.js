import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Switch, useLocation } from 'react-router-dom';
import Loading from 'src/components/Loading/Loading';
import { PATH } from 'src/constants/paths';
import Guard from 'src/guards/Guard';
const Login = lazy(() => import('src/pages/Login/Login'));
const SignUp = lazy(() => import('src/pages/SignUp/SignUp'));
const LostPassword = lazy(() => import('src/pages/LostPassword/LostPassword'));

const LoginRoutes = () => {
	const user = useSelector((state) => state.user);
	const history = useLocation();
	const [redirectURL, setRedirectURL] = useState(PATH.HOME);

	useEffect(() => {
		const excludeURL = [PATH.LOGIN, PATH.SIGNUP, PATH.LOST_PASS];
		if (!excludeURL.includes(history.pathname)) {
			setRedirectURL(history.pathname);
		}
	}, [history]);

	return (
		<Switch>
			<Guard
				exact
				condition={!user}
				path={PATH.LOGIN}
				redirect={redirectURL}
			>
				<Suspense fallback={<Loading />}>
					<Login />
				</Suspense>
			</Guard>
			<Guard
				exact
				condition={!user}
				path={PATH.SIGNUP}
				redirect={redirectURL}
			>
				<Suspense fallback={<Loading />}>
					<SignUp />
				</Suspense>
			</Guard>
			<Guard
				exact
				condition={!user}
				path={PATH.LOST_PASS}
				redirect={redirectURL}
			>
				<Suspense fallback={<Loading />}>
					<LostPassword />
				</Suspense>
			</Guard>
		</Switch>
	);
};

export default LoginRoutes;
