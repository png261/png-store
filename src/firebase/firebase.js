import firebase from 'firebase';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
	measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

//FireStore Database
const db = firebaseApp.firestore();
const storageService = firebase.storage();
const COLLECTION_IDS = {
	PRODUCTS: 'products',
	PRODUCT_REVIEWS: 'reviews',
	USERS: 'users',
};

//Firebase Authentication
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export {
	COLLECTION_IDS,
	auth,
	storageService,
	googleProvider,
	facebookProvider,
};
export default db;
