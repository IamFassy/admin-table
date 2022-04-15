import { GET_USERS } from '../actionTypes/userData';

const initialState = {
	users: [],
};

export default function userDataReducer(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case GET_USERS:
			let dummyState = { ...state };
			dummyState.users = payload;
			return { ...state, ...dummyState };
		default:
			return state;
	}
}
