import { db } from '../Firebase';

export const updateWishlist = (user, newList) => (dispatch) => {
	try {
		dispatch({ type: 'TOGGLE_IS_UPDATING_USER_DATA' });
		db.collection('users')
			.doc(user.uid)
			.set({ wishlist: newList }, { merge: true });
	} finally {
		dispatch({ type: 'TOGGLE_IS_UPDATING_USER_DATA' });
	}
};
