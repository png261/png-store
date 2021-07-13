import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import InputField from 'src/custom-fields/InputField/InputField';
import db, { COLLECTION_IDS } from 'src/firebase/firebase';
import { Wrapper } from './ProductAddReview.styles';

const ProductAddReview = () => {
	const { productId } = useParams();
	const [reviewText, setReviewText] = useState('');
	const user = useSelector((state) => state.user);

	const onSubmit = (e) => {
		e.preventDefault();

		if (!reviewText) return;
		const contents = [reviewText];

		const newReview = {
			contents,
			uid: user.uid,
			timestamp: new Date(),
			votes: {},
		};
		db.collection(COLLECTION_IDS.PRODUCTS)
			.doc(productId)
			.collection(COLLECTION_IDS.PRODUCT_REVIEWS)
			.add(newReview);

		setReviewText('');
	};

	const onChangeInput = (e) => setReviewText(e.target.value);

	return (
		<Wrapper>
			<InputField
				field="Input review"
				placeholder="Leave your review"
				value={reviewText}
				onChange={onChangeInput}
			/>
			<button type="submit" onClick={onSubmit}>
				Send
			</button>
		</Wrapper>
	);
};

export default ProductAddReview;
