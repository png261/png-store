import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLOR } from 'src/constants/styles';

export const Button = styled(Link)`
	position: relative;
	display: grid;
	place-items: center;
	img {
		width: 14px;
		height: 16px;
	}
`;

export const Number = styled.div`
	position: absolute;
	z-index: 9;
	font-family: arial;
	top: 50%;
	right: -7px;
	margin-top: -13px;
	background: linear-gradient(${COLOR.YELLOW}, #ff878a);
	width: 14px;
	height: 14px;
	line-height: 15px;
	text-align: center;
	font-size: 8px;
	border-radius: 100%;
	color: #fff;
`;
