import axios from 'axios';
import {
	GET_POSTS,
	GET_USERS,
	SET_SELECTED_USER,
} from '../actionTypes/userData';

export const getUsers = () => {
	return async (dispatch) => {
		try {
			const { data } = await axios.get(
				`https://jsonplaceholder.typicode.com/users`
			);
			dispatch({
				type: GET_USERS,
				payload: data,
			});
		} catch (e) {
			console.log(e);
		}
	};
};

export const getPosts = ({ id }) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.get(
				`https://jsonplaceholder.typicode.com/posts?userId=${id}`
			);
			dispatch({
				type: GET_POSTS,
				payload: data,
			});
		} catch (e) {
			console.log(e);
		}
	};
};

export const setUser = (data) => {
	return (dispatch) => {
		dispatch({
			type: SET_SELECTED_USER,
			payload: data,
		});
	};
};
