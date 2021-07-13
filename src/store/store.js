import { createStore } from 'redux';
import rootReducer from 'src/reducers';

const persistedState = JSON.parse(localStorage.getItem('reduxState')) || {};
const store = createStore(rootReducer, persistedState);
store.subscribe(() => {
	localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});
export default store;
