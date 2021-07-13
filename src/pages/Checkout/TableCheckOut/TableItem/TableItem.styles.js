import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.tr`
	td {
		padding: 20px 0;
		border: 0;
		border-spacing: 0;
		border-bottom: 1px solid;
	}
`;

export const ProductThumb = styled(Link)`
	display: block;
	position: relative;
	overflow: hidden;
	width: 80px;
	height: 80px;
	img {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		min-width: 100%;
		width: 100%;
		min-height: 100%;
		object-fit: cover;
	}
`;

export const RemoveButton = styled.button`
	font-size: 24px;
	width: 14px;
	height: 24px;
	line-height: 24px;
`;
