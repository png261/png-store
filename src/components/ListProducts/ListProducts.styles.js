import styled from 'styled-components';

export const List = styled.div`
	display: grid;
	grid-template-columns: repeat(${({ col }) => col}, 1fr);
	grid-gap: 30px;

	/* Small devices (landscape phones, less than 768px) */
	@media (max-width: 767.98px) {
		grid-template-columns: 1fr;
	}
`;
