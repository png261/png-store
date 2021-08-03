import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from 'src/actions/user';
import db, { auth, COLLECTION_IDS } from 'src/firebase/firebase';
import Routes from 'src/routes/routes';

function App() {
	const dispatch = useDispatch();

	auth.onAuthStateChanged((userAuth) => {
		if (!userAuth) return dispatch(logout());

		return db
			.collection(COLLECTION_IDS.USERS)
			.doc(userAuth.uid)
			.onSnapshot((snapshot) => {
				const action = login({ ...snapshot.data() });
				dispatch(action);
			});
	});

	return <Routes />;
}

export default App;
