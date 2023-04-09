import { BW_URI_PREFIX } from '../../utils/constants';
import { sendGetRequest, sendPostRequest } from '../../lib/axios';

const getUserById = (userId) => {
	return sendGetRequest(`users/${userId}`);
};

const signInUser = async (data) => {
	const response = await sendPostRequest(BW_URI_PREFIX+`/authentication`, data, {
		'Content-Type': 'application/json'
	})
	.then(resp => {
		localStorage.setItem('token', resp.data.token)
	})
	.catch(error => {
		if (localStorage.getItem('token')) {
			localStorage.removeItem('token')
		}
	})

	return response;
};

export { signInUser, getUserById };
