import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	color: var(--color-content, #414145);
	label {
		font-size: 20px;
	}
	input {
		height: 40px;
		border: 0;
		border-bottom: 1.5px solid var(--color-input-text, #adadad);
		&:focus {
			outline: none;
		}
	}
`;
