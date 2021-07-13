import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer/Footer';
import { Wrapper } from './MainLayout.styles';

const MainLayout = ({ children }) => {
	return (
		<Wrapper className="container">
			<Header />
			<main>{children}</main>
			<Footer />
		</Wrapper>
	);
};

export default MainLayout;
