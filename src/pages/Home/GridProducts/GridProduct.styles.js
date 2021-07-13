import styled from 'styled-components';

export const Wrapper = styled.div`
	.grid-item {
		float: left;
		${({ gutter }) => `
            width: calc(50% - ${gutter}px / 2);
            margin-bottom: ${gutter / 2}px;`}
		padding-bottom: 7px;

		/* X-Small devices (portrait phones, less than 576px) */
		@media (max-width: 575.98px) {
			width: 100%;
		}
	}
`;

export const Filters = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-bottom: 50px;
	column-gap: 20px;
	flex-wrap: wrap;
	max-width: 100%;
	position: -webkit-sticky; /* Safari */
	position: sticky;
	top: 0;
	z-index: 98;
	padding: 20px 0;
	margin-bottom: 0;
	background-color: #fff;
	margin-bottom: 30px;
	button {
		font-size: 16px;
		line-height: 24px;
		text-transform: capitalize;
		&:not(:hover, .active) sup {
			opacity: 0;
		}
		sup {
			transition: opacity 0.3s;
			font-size: 0.5em;
			line-height: 1em;
			vertical-align: text-top;
			margin-left: 5px;
		}
	}

	/* Small devices (landscape phones, less than 768px) */
	@media (max-width: 767.98px) {
		margin-bottom: 0;
	}

	/* X-Small devices (portrait phones, less than 576px) */
	@media (max-width: 575.98px) {
		gap: 10px;
		button {
			font-size: 14px;
		}
	}
`;

export const GridItems = styled.div``;
