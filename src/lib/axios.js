import { default as Axios } from "axios";

// utils 
import { BW_URI_PREFIX } from "../utils/constants"

const axios = Axios.create({
	baseURL: BW_URI_PREFIX,
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

const sendPostRequest = async (url, data = {}, headers = {}) => {
	return await axios.post(url, data, headers);
};

export { sendGetRequest, sendPostRequest };
