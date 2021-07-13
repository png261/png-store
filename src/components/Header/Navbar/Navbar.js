import { NavLink } from 'react-router-dom';
import { PATH } from 'src/constants/paths';
import {
	Menu,
	NavbarToggler,
	NavbarTogglerIcon,
	Wrapper,
} from './Navbar.styles';

const Navbar = ({ toggleExpandMenu, isExpandMenu }) => {
	return (
		<Wrapper>
			<Menu
				className={isExpandMenu ? 'active' : ''}
				active={isExpandMenu}
			>
				<li>
					<NavLink to={PATH.HOME} exact={true}>
						Store
					</NavLink>
				</li>
				<li>
					<NavLink to={PATH.ABOUT}>About</NavLink>
				</li>
			</Menu>
			<NavbarToggler onClick={toggleExpandMenu} active={isExpandMenu}>
				{isExpandMenu ? 'CLOSE' : 'MENU'}
				<NavbarTogglerIcon active={isExpandMenu} />
			</NavbarToggler>
		</Wrapper>
	);
};

export default Navbar;
