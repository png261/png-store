import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import Tabs from 'src/components/Tabs/Tabs';
import { PATH } from 'src/constants/paths';
import db, { COLLECTION_IDS } from 'src/firebase/firebase';
import { ProductDetails, ProductGallery, Wrapper } from './Product.styles';
import ProductDes from './ProductDes/ProductDes';
import ProductReviews from './ProductReviews/ProductReviews';
import ProductSummary from './ProductSummary/ProductSummary';
import RelatedProducts from './RelatedProducts/RelatedProducts';

const Product = () => {
	const { productId } = useParams();
	const [product, setProduct] = useState(null);
	const [reviews, setReviews] = useState([]);
	const history = useHistory();
	const productDoc = db.collection(COLLECTION_IDS.PRODUCTS).doc(productId);

	const scrollTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		async function getData() {
			await productDoc.onSnapshot((snapshot) => {
				if (!snapshot.exists) return history.replace(PATH.PAGE404);
				setProduct({ id: productId, ...snapshot.data() });
			});

			await productDoc
				.collection(COLLECTION_IDS.PRODUCT_REVIEWS)
				.orderBy('timestamp')
				.onSnapshot((snapshot) =>
					setReviews(
						snapshot.docs.map((doc) => ({
							id: doc.id,
							...doc.data(),
						}))
					)
				);
		}

		scrollTop();
		getData();
	}, [productId]);

	return (
		<>
			{product && (
				<Wrapper>
					<ProductDetails>
						<ProductGallery>
							<img src={product.thumb} alt={product.name} />
						</ProductGallery>
						<ProductSummary product={product} />
					</ProductDetails>
					<Tabs
						tabNames={[
							'Description',
							`Reviews (${reviews.length})`,
						]}
					>
						<ProductDes content={product.des} />
						<ProductReviews
							reviews={reviews}
							productName={product.name}
						/>
					</Tabs>
					<RelatedProducts currentProduct={product} />
				</Wrapper>
			)}
		</>
	);
};

export default Product;
