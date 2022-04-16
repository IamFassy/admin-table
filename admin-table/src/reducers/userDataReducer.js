import {
	GET_POSTS,
	GET_USERS,
	SET_SELECTED_USER,
} from '../actionTypes/userData';

const initialState = {
	users: [],
	posts: [],
	selectedUser: {},
};

export default function userDataReducer(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case GET_USERS:
			let dummyState = { ...state };
			dummyState.users = payload;
			return { ...state, ...dummyState };
		case GET_POSTS:
			let dummyPost = { ...state };
			dummyPost.posts = payload;
			return { ...state, ...dummyPost };
		case SET_SELECTED_USER:
			let dummyUser = { ...state };
			dummyUser.selectedUser = payload;
			return { ...state, ...dummyUser };
		default:
			return state;
	}
}
