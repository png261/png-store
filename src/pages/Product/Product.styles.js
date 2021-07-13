import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ProductDetails = styled.div`
	display: grid;
	grid-template-columns: 4fr 3fr;
	grid-column-gap: 5%;
	/* Small devices (landscape phones, less than 768px) */
	@media (max-width: 767.98px) {
		grid-template-columns: 1fr;
	}
`;

export const ProductGallery = styled.div`
	img {
		width: 100%;
	}
	/* Small devices (landscape phones, less than 768px) */
	@media (max-width: 767.98px) {
		margin-bottom: 50px;
	}
`;
