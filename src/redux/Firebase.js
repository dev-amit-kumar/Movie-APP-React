import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
	apiKey: 'AIzaSyD0-CXIGP7UxVQ25PukIoEg2b7CW2sHIN4',
	authDomain: 'movie-time-3f213.firebaseapp.com',
	projectId: 'movie-time-3f213',
	storageBucket: 'movie-time-3f213.appspot.com',
	messagingSenderId: '992097171686',
	appId: '1:992097171686:web:f33c1ae660ed37b8d92327',
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const db = app.firestore();
export default app;
