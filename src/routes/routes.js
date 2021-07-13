import { BrowserRouter } from 'react-router-dom';
import MainLayout from 'src/layout/MainLayout';
import Page404 from './404Routes';
import AboutRoutes from './AboutRoutes';
import AuthRoutes from './AuthRoutes';
import HomeRoutes from './HomeRoutes';
import ProductRoutes from './ProductRoutes';

const Routes = () => (
	<BrowserRouter>
		<MainLayout>
			<ProductRoutes />
			<AuthRoutes />
			<AboutRoutes />
			<HomeRoutes />
			<Page404 />
		</MainLayout>
	</BrowserRouter>
);

export default Routes;
