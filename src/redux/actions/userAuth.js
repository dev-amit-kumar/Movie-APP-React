import { auth, db } from '../Firebase';

export const registerUser = (fullname, email, password) => (dispatch) => {
	try {
		dispatch({ type: 'TOGGLE_IS_LOADING_AUTH_USER' });
		dispatch({ type: 'REGISTER_ERROR', payload: null });
		auth.createUserWithEmailAndPassword(email, password)
			.then((res) => {
				db.collection('users').doc(res.user.uid).set({
					name: fullname,
					wishlist: [],
					history: [],
					fav_genres: [],
					themeColor: '#032541',
				});
			})
			.catch((error) => {
				dispatch({ type: 'REGISTER_ERROR', payload: error });
			});
	} finally {
		dispatch({ type: 'TOGGLE_IS_LOADING_AUTH_USER' });
	}
};

export const loginUser = (email, password) => (dispatch) => {
	try {
		dispatch({ type: 'TOGGLE_IS_LOADING_AUTH_USER' });
		dispatch({ type: 'LOGIN_ERROR', payload: null });
		auth.signInWithEmailAndPassword(email, password)
			.then((data) => {
				console.log(data);
			})
			.catch((error) => {
				dispatch({ type: 'LOGIN_ERROR', payload: error });
			});
	} finally {
		dispatch({ type: 'TOGGLE_IS_LOADING_AUTH_USER' });
	}
};

export const logoutUser = () => (dispatch) => {
	try {
		dispatch({ type: 'TOGGLE_IS_LOADING_AUTH_USER' });
		auth.signOut()
			.then()
			.catch((err) => alert(err));
	} finally {
		dispatch({ type: 'TOGGLE_IS_LOADING_AUTH_USER' });
	}
};
