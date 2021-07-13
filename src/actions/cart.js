export const addProduct = (product) => ({
	type: 'ADD_PRODUCT',
	payload: product,
});

export const removeProduct = (product) => ({
	type: 'REMOVE_PRODUCT',
	payload: product,
});

export const updateProduct = (product) => ({
	type: 'UPDATE_PRODUCT',
	payload: product,
});
