import styled from 'styled-components';

export const Table = styled.table`
	border-collapse: collapse;
	width: 100%;
	text-align: left;
	th {
		min-width: 32px;
		border-bottom: 2px solid;
		line-height: 20px;
		padding: 20px 0;
		font-size: 20px;
		font-weight: 300;
	}
	td {
		min-width: 15px;
		padding-left: 5px;
		padding-right: 5px;
		min-width: max-content;
	}

	/* Small devices (landscape phones, less than 768px) */
	@media (max-width: 767.98px) {
		border: 2px solid;
		border-width: 2px 0px 2px 0;
		font-size: 14px;
		th,
		td:first-child {
			display: none;
		}
		td:nth-child(2) {
			font-weight: 700;
		}
	}

	/* X-Small devices (portrait phones, less than 576px) */
	@media (max-width: 575.98px) {
		font-size: 12px;
	}
`;
