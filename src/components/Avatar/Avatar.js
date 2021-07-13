import React from 'react';
import { generateUserName } from 'src/helper/string';
import { Warper } from './Avatar.styles';

const Avatar = ({ src, title, onClick, size = 25 }) => {
	return (
		<Warper onClick={onClick} size={size}>
			{src ? (
				<img src={src} alt="" />
			) : (
				<span>{generateUserName(title)}</span>
			)}
		</Warper>
	);
};

export default Avatar;
