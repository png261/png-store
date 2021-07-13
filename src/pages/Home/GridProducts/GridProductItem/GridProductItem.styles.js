import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled(Link)`
	display: block;
	position: relative;
	transition: all 0.3s;
	&:not(:hover) .info {
		opacity: 0;
	}
`;
export const Thumb = styled.div`
	img {
		width: 100%;
		height: auto;
	}
`;

export const Info = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-end;
	inset: 0;
	background-color: #fff;
	transition: all 0.35s;
	z-index: 1;
	padding: 40px;
	opacity: 0.7;
	h2 {
		font-size: 26px;
		font-weight: 300;
		margin-bottom: 0;
	}
	span {
		display: block;
		font-size: 14px;
		letter-spacing: 0px;
		color: #8e8e8e;
	}
`;
