import { default as Axios } from "axios";

// utils 
import { constants } from "../utils/constants"

const axios = Axios.create({
	baseURL: constants.BW_URI_PREFIX,
	timeout: 10000,
	headers: {
		// 'CSRF-Token': csrfToken
	}
});

const sendGetRequest = (url, params = {}, headers = {}) => {
	return axios.get(url, {
		headers,
		params,
	});
};

const sendPostRequest = (url, params = {}, headers = {}) => {
	return axios.post(url, {
		headers,
		params,
	});
};

export { sendGetRequest, sendPostRequest };
