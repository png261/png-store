import styled from 'styled-components';
export const Warper = styled.div`
	${({ size }) => `
    width: ${size}px;
    height: ${size}px;`}
	position: relative;
	overflow: hidden;
	border-radius: 50%;
	display: grid;
	place-items: center;
	background-color: #000;
	text-transform: uppercase;
	span {
		color: #fff;
		font-weight: 400;
		font-size: 13px;
	}
	img {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}
`;
