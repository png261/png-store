import styled from 'styled-components';

export const Wrapper = styled.header`
	display: flex;
	align-items: center;
	column-gap: 20px;
	height: var(--header-height);
	position: relative;
	z-index: 99;
`;

export const Logo = styled.div`
	flex: 1;
	font-family: 'Libre Baskerville', serif;
	color: var(--color-logo, #313139);
	font-size: 24px;
`;
