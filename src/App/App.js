import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from 'src/actions/user';
import db, { auth, COLLECTION_IDS } from 'src/firebase/firebase';
import Routes from 'src/routes/routes';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		const updateUserStatus = () => {
			auth.onAuthStateChanged((userAuth) => {
				if (userAuth) {
					return db
						.collection(COLLECTION_IDS.USERS)
						.doc(userAuth.uid)
						.onSnapshot((snapshot) => {
							const action = login({ ...snapshot.data() });
							dispatch(action);
						});
				}

				const action = logout();
				dispatch(action);
			});
		};
		updateUserStatus();
	}, []);

	return <Routes />;
}

export default App;
