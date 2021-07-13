import styled from 'styled-components';

export const Warper = styled.div`
	& > h1 {
		font-size: 25px;
		margin-bottom: 40px;
	}
`;

export const AuthAlert = styled.p`
	font-size: 18px;
	margin-top: 20px;
	a {
		text-decoration: underline;
	}
`;

export const NoReview = styled.div`
	span {
		font-size: 16px;
	}
	h2 {
		font-size: 20px;
		font-weight: 500;
	}
`;
