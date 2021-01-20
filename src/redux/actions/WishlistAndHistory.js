import { db } from '../Firebase';
import { triggerSwal } from './swalToast';

export const updateWishlist = (user, newList) => async (dispatch) => {
	try {
		dispatch({ type: 'TOGGLE_IS_UPDATING_USER_DATA' });
		await db
			.collection('users')
			.doc(user.uid)
			.set({ wishlist: newList }, { merge: true });
	} catch (error) {
		triggerSwal(error.message);
	} finally {
		dispatch({ type: 'TOGGLE_IS_UPDATING_USER_DATA' });
	}
};

export const updateHistory = (user, newList) => async (dispatch) => {
	try {
		dispatch({ type: 'TOGGLE_IS_UPDATING_USER_DATA' });
		await db
			.collection('users')
			.doc(user.uid)
			.set({ history: newList }, { merge: true });
	} catch (error) {
		triggerSwal(error.message);
	} finally {
		dispatch({ type: 'TOGGLE_IS_UPDATING_USER_DATA' });
	}
};
