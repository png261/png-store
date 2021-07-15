import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Welcome = styled.div`
	height: max-content;
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 750px;
	padding: 100px 0;
	margin-left: 8.3333%;
	& > h1 {
		font-size: 70px;
		color: var(--color-title, #313139);
		font-size: 3.4vw;
		letter-spacing: 0.5px;
		font-weight: 600;
		line-height: 1;
		margin-bottom: 15px;
	}
	& > h3 {
		color: #808080;
		font-size: 2vw;
		font-weight: 600;
		color: #808080;
	}
	/* Small devices (landscape phones, less than 768px) */
	@media (max-width: 767.98px) {
		& > h1 {
			font-size: 32px;
		}
		& > h3 {
			font-size: 24px;
		}
	}
`;

export const Line = styled.div`
	display: block;
	width: 45px;
	height: 5px;
	margin: 10px 0 20px;
	background-color: #666666;
`;
