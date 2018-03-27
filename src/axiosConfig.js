import axios from 'axios';
// Add a request interceptor
axios.interceptors.request.use(
	function(config) {
		config.baseURL = 'http://www.itegrators.com/extras/medreps/';
		// if (token) {
		//
		// }

		console.log(config);
		return config;
	},
	function(error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

// Add a response interceptor
axios.interceptors.response.use(
	function(response) {
		//let parsed_response = JSONAPIParser(response);
		//console.log("parsed.....", parsed_response );

		return { ...response, parsed: {} };
	},
	function(error) {
		// Do something with response error
		return Promise.reject(error);
	}
);

export default axios;
