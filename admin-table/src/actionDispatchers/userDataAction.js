import axios from 'axios';
import { GET_USERS } from '../actionTypes/userData';

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
