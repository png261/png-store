import { combineReducers } from 'redux';
import cartReducer from './cart';
import userReducer from './user';

const rootReducer = combineReducers({
	cart: cartReducer,
	user: userReducer,
});

export default rootReducer;
