import Avatar from 'src/components/Avatar/Avatar';
import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	position: relative;
	padding: 20px;
	transition: 0.2s;
	&:hover {
		background-color: #f0f0f063;
	}
	.actions {
		transition: 0.2s;
	}
	&:not(:hover) .actions {
		visibility: hidden;
		opacity: 0;
	}
	.text-danger:hover {
		color: red;
	}

	/* X-Small devices (portrait phones, less than 576px) */
	@media (max-width: 575.98px) {
		padding: 20px 10px;
	}
`;

export const Votes = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-right: 20px;
	margin-top: -10px;
	button {
		padding: 0;
		margin: 0;
		line-height: 1;
		i {
			font-size: 28px;
		}
		&:not(.active) {
			color: #dbd7d2;
		}
	}
	span {
		line-height: 1;
		font-size: 15px;
		font-weight: 400;
	}
`;

export const ReviewInner = styled.div`
	display: grid;
	grid-gap: 15px 20px;
	grid-template-columns: auto 1fr;
	justify-content: flex-start;
	grid-template-areas:
		'avatar info'
		'avatar content';

	/* X-Small devices (portrait phones, less than 576px) */
	@media (max-width: 575.98px) {
		grid-gap: 15px;
		grid-template-areas:
			'avatar info'
			'content content';
	}
`;

export const ReviewAvatar = styled.div`
	grid-area: avatar;
	width: max-content;
`;

export const ReviewInfo = styled.div`
	grid-area: info;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	justify-content: flex-start;
	column-gap: 20px;
	row-gap: 5px;
	width: 100%;
	span {
		font-size: 15px;
		font-weight: 500;
		line-height: 1;
		display: block;
		&.time {
			font-size: 11px;
			font-weight: 400;
		}
	}
`;

export const ReviewContent = styled.div`
	grid-area: content;
`;

export const ReviewActions = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	gap: 20px;
	button {
		font-size: 14px;
		line-height: 1;
		padding: 0;
		margin: 0;
		transition: 0.2s;
		&:hover {
			text-decoration: underline;
		}
	}
`;

export const ReviewText = styled.p`
	font-size: 18px;
	margin: 0;
	width: fit-content;
	max-width: 600px;
	word-break: break-all;
	line-height: 1.2;
	background: inherit;
	border: 0;
`;

export const ReviewEdit = styled.div`
	display: flex;
	flex-wrap: wrap;
	column-gap: 10px;
	textarea {
		width: 100%;
		padding: 10px;
		border-radius: 0;
		border: 0;
		border-bottom: 1.5px solid var(--color-input-text, #adadad);
	}
	button {
		margin-top: 10px;
	}
`;
