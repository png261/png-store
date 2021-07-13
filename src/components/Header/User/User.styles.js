import styled from 'styled-components';
export const Warper = styled.div``;
export const Avatar = styled.div`
	width: 25px;
	height: 25px;
	position: relative;
	overflow: hidden;
	border-radius: 50%;
	display: grid;
	place-items: center;
	background-color: #000;
	cursor: pointer;
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
export const Box = styled.div``;
