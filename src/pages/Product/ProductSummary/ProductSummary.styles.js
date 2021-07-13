import { Link } from 'react-router-dom';
import { COLOR } from 'src/constants/styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
	& > h1 {
		margin-bottom: 20px;
		font-size: 28px;
	}
	p {
		margin-bottom: 30px;
	}
`;
export const Categories = styled.div`
	font-size: 14px;
	margin-top: 40px;
	font-weight: 400;
	span {
		margin-right: 10px;
	}
`;
export const Category = styled(Link)`
	margin-right: 3px;
	&:not(:hover) {
		background: -webkit-linear-gradient(${COLOR.YELLOW}, #ff878a);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	&:not(:last-child):after {
		content: ',';
		color: var(--color-content, #414145);
	}
`;

export const Price = styled.div`
	background: -webkit-linear-gradient(${COLOR.YELLOW}, #ff878a);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-size: 25px;
	font-weight: 400;
`;

export const AddToCart = styled.div`
	display: flex;
	align-items: flex-end;
	column-gap: 15px;
`;

export const Socials = styled.div`
	display: flex;
	margin-top: 40px;
	column-gap: 60px;
	font-size: 28px;
`;
