import styled from 'styled-components';

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	border-bottom: 1px solid var(--color-input-text, #adadad);
	width: ${({ width }) => `${width || 105}px`};
	height: 100%;
	justify-content: space-between;
	align-items: center;
	color: var(--color-input-text, #adadad);
	padding-bottom: 5px;
	& > * {
		display: block;
		height: 100%;
		padding: 0;
		margin: 0;
	}
	input {
		border: 0;
		background: inherit;
		width: 100%;
		border-radius: 0;
		text-align: center;
		&:focus {
			outline: none;
		}
	}
	button {
		font-size: 16px;
		font-weight: 300;
		&:disabled {
			opacity: 0.5;
		}
	}
`;
