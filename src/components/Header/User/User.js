import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PATH } from 'src/constants/paths';
import { auth } from 'src/firebase/firebase';
import { generateUserName } from 'src/helper/string';
import { Avatar, Warper } from './User.styles';
import ReactTooltip from 'react-tooltip';

const User = () => {
	const user = useSelector((state) => state.user);
	const signOut = () => {
		auth.signOut();
	};

	return (
		<Warper>
			{user ? (
				<Avatar data-tip="signOut" onClick={signOut}>
					{user.userAvatar ? (
						<img src={user.userAvatar} alt="" />
					) : (
						<span>{generateUserName(user.userName)}</span>
					)}
				</Avatar>
			) : (
				<Link to={PATH.LOGIN}>Login</Link>
			)}
			<ReactTooltip />
		</Warper>
	);
};

export default User;
