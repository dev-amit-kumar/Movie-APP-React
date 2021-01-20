import { db } from '../Firebase';
import { triggerSwal } from './swalToast';

export const setUser = (user) => {
	return {
		type: 'SET_USER',
		payload: user,
	};
};

export const removeUserData = () => {
	return {
		type: 'REMOVE_USER_DATA',
		payload: null,
	};
};

export const ChangeColor = (themeColor) => {
	document.body.style.setProperty('--primary', themeColor);
	document.body.style.setProperty('--primary_text', themeColor);
};

export const getUserData = (user) => (dispatch) => {
	try {
		dispatch({ type: 'GET_USER_DATA', payload: null });
		dispatch({ type: 'TOGGLE_IS_LOADING_USER_DATA' });
		db.collection('users')
			.doc(user.uid)
			.onSnapshot((doc) => {
				let data = doc.data();
				ChangeColor(data.themeColor);
				dispatch({ type: 'GET_USER_DATA', payload: doc.data() });
			});
	} catch (error) {
		triggerSwal(error.message);
	} finally {
		dispatch({ type: 'TOGGLE_IS_LOADING_USER_DATA' });
	}
};

export const updateProfileData = (user, fullname, genreList) => (dispatch) => {
	try {
		dispatch({ type: 'TOGGLE_IS_UPDATING_USER_DATA' });
		db.collection('users')
			.doc(user.uid)
			.set({ name: fullname, fav_genres: genreList }, { merge: true });
	} catch (error) {
		triggerSwal(error.message);
	} finally {
		dispatch({ type: 'TOGGLE_IS_UPDATING_USER_DATA' });
	}
};

export const updateUserTheme = (user, themeColor) => (dispatch) => {
	try {
		ChangeColor(themeColor);
		dispatch({ type: 'TOGGLE_IS_UPDATING_USER_DATA' });
		db.collection('users')
			.doc(user.uid)
			.set({ themeColor: themeColor }, { merge: true });
	} catch (error) {
		triggerSwal(error.message);
	} finally {
		dispatch({ type: 'TOGGLE_IS_UPDATING_USER_DATA' });
	}
};
