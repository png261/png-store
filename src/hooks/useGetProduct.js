import { useEffect, useState } from 'react';
import db, { COLLECTION_IDS } from 'src/firebase/firebase';

export default function useGetAllProducts() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		db.collection(COLLECTION_IDS.PRODUCTS).onSnapshot((snapshot) => {
			setProducts(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}))
			);
		});
	}, []);

	return products;
}
