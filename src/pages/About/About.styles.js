import styled from 'styled-components';

export const Wrapper = styled.div``;
export const Group = styled.div`
	display: flex;
	justify-content: flex-end;
	flex-wrap: wrap;
	width: 100%;
	padding: 40px 0 60px;
	/* Small devices (landscape phones, less than 768px) */
	@media (max-width: 767.98px) {
		padding: 30px 0;
	}
`;

export const GroupItem = styled.div`
	margin-bottom: 30px;
	width: 50%;
	h1 {
		font-size: 3.4vw;
		font-weight: 600;
		margin-top: 15px;
		width: 100%;
	}
	h2 {
		font-weight: 600;
		font-size: 1.8vw;
		color: var(--color-title, #313139);
		margin-bottom: 20px;
	}
	small {
		display: block;
		font-size: 16px;
		line-height: 1.8;
		:not(:last-child) {
			margin-bottom: 30px;
		}
	}

	/* Small devices (landscape phones, less than 768px) */
	@media (max-width: 767.98px) {
		width: 100%;
		h1 {
			font-size: 34px;
		}
		h2 {
			font-size: 26px;
		}
	}
`;
