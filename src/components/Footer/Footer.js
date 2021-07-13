import { Wrapper, Logo } from './Footer.styles';
import { Link } from 'react-router-dom';
import BackToTop from './BackToTop/BackToTop';

const Footer = () => {
	return (
		<Wrapper>
			<Logo>
				<Link to="/"> PNG.</Link>
			</Logo>
			<BackToTop />
		</Wrapper>
	);
};

export default Footer;
