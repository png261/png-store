import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import Loading from 'src/components/Loading/Loading';
import { PATH } from 'src/constants/paths';
import Guard from 'src/guards/Guard';
const Login = lazy(() => import('src/pages/Login/Login'));
const SignUp = lazy(() => import('src/pages/SignUp/SignUp'));
const LostPassword = lazy(() => import('src/pages/LostPassword/LostPassword'));

const LoginRoutes = () => {
	const user = useSelector((state) => state.user);

	return (
		<Switch>
			<Guard
				exact
				condition={!user}
				path={PATH.LOGIN}
				redirect={PATH.HOME}
			>
				<Suspense fallback={<Loading />}>
					<Login />
				</Suspense>
			</Guard>
			<Guard
				exact
				condition={!user}
				path={PATH.SIGNUP}
				redirect={PATH.HOME}
			>
				<Suspense fallback={<Loading />}>
					<SignUp />
				</Suspense>
			</Guard>
			<Guard
				exact
				condition={!user}
				path={PATH.LOST_PASS}
				redirect={PATH.HOME}
			>
				<Suspense fallback={<Loading />}>
					<LostPassword />
				</Suspense>
			</Guard>
		</Switch>
	);
};

export default LoginRoutes;
