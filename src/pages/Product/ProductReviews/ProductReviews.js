import { lazy } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PATH } from 'src/constants/paths';
import { Warper, AuthAlert, NoReview } from './ProductReviews.styles';
const ProductReview = lazy(() => import('./ProductReview/ProductReview'));
const ProductAddReview = lazy(() =>
	import('./ProductAddReview/ProductAddReview')
);

const ProductReviews = ({ reviews, productName }) => {
	const user = useSelector((state) => state.user);

	return (
		<Warper>
			<h1>Review</h1>

			{reviews.length > 0 ? (
				reviews.map((review) => <ProductReview review={review} />)
			) : (
				<NoReview>
					<span>There are no reviews yet.</span>
					<h2>Be the first to review “{productName}”</h2>
				</NoReview>
			)}

			{user ? (
				<ProductAddReview></ProductAddReview>
			) : (
				<AuthAlert>
					You must be <Link to={PATH.LOGIN}>logged</Link> in to post a
					review.
				</AuthAlert>
			)}
		</Warper>
	);
};

export default ProductReviews;
