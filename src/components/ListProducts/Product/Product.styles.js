import styled from 'styled-components';

export const Wrapper = styled.div`
	display: block;
	width: 100%;
	position: relative;
	&:not(:hover) .product-info {
		opacity: 0;
		visibility: 0;
	}
`;
export const Thumb = styled.div`
	width: 100%;
	padding-top: 100%;
	position: relative;
	overflow: hidden;
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

export const Info = styled.div`
	position: absolute;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 1;
	inset: 0;
	background-color: #fff;
	transition: 0.5s;
	h3 {
		font-size: 24px;
		margin-bottom: 5px;
	}
	span {
		display: block;
		margin-bottom: 10px;
	}
`;
