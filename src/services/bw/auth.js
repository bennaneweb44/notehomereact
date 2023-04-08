import { sendGetRequest, sendPostRequest } from '../lib/axios';

const getUserById = (userId) => {
	return sendGetRequest(`users/${userId}`);
};

const signInUser = (json) => {
	return sendPostRequest(`authentication`);
};

export { signInUser, getUserById };
