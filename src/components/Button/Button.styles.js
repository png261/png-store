import styled from 'styled-components';

const ButtonWithBorder = `
    border: 1px solid var(--color-input-text, #adadad);
    display: grid;
    place-items: center;
    padding: 0.625em 1.375em;
`;
const Button = styled.button`
	font-size: 16px;
	color: #515151;
	width: max-content;
	${({ border }) => !border && ButtonWithBorder}
`;

export default Button;
