const initialState = [];

const hobbyReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_PRODUCT': {
			return [...state, action.payload];
		}
		case 'REMOVE_PRODUCT': {
			const newList = state.filter(({ id }) => id !== action.payload);
			return [...newList];
		}
		case 'UPDATE_PRODUCT': {
			const newList = state.map((product) =>
				product.id === action.payload.id
					? { ...action.payload }
					: product
			);
			return [...newList];
		}
		default:
			return state;
	}
};

export default hobbyReducer;
