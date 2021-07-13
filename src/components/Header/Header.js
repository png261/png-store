import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { PATH } from 'src/constants/paths';
import { auth } from 'src/firebase/firebase';
import Cart from './Cart/Cart';
import { Logo, Wrapper } from './Header.styles';
import Navbar from './Navbar/Navbar';
import Avatar from 'src/components/Avatar/Avatar';

const Header = () => {
	const [isExpandMenu, setIsExpandMenu] = useState(false);
	const user = useSelector((state) => state.user);

	const signOut = () => auth.signOut();
	const toggleExpandMenu = (e) => {
		e.stopPropagation();
		setIsExpandMenu(!isExpandMenu);
	};
	const hideMenu = () => setIsExpandMenu(false);

	return (
		<Wrapper onClick={hideMenu}>
			<Logo onClick={hideMenu}>
				<Link to={PATH.HOME}>PNG.</Link>
			</Logo>
			<Navbar
				toggleExpandMenu={toggleExpandMenu}
				isExpandMenu={isExpandMenu}
			/>
			{user ? (
				<button data-tip="signOut">
					<Avatar
						src={user.userAvatar}
						title={user.userName}
						onClick={signOut}
					></Avatar>
					<ReactTooltip />
				</button>
			) : (
				<Link to={PATH.LOGIN}>Login</Link>
			)}
			<Cart />
		</Wrapper>
	);
};

export default Header;
