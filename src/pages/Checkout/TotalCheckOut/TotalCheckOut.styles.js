import styled from 'styled-components';

export const Wrapper = styled.div`
	max-width: 589px;
	width: 100%;
	margin-top: 80px;
	margin-bottom: 15px;
`;

export const Table = styled.table`
	border: 2px solid #000;
	border-width: 2px 0 2px 0;
	width: 100%;
	text-align: left;
	margin-top: 30px;
	th,
	td {
		padding: 20px 0;
		font-weight: 400;
	}
	tr:not(:first-child) {
		th,
		td {
			border-top: 1px solid #ebe9eb;
		}
	}
`;
