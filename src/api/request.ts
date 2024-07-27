import axios, { Method } from "axios";

const fetchData = async <T>(method: Method, url: string, params: any) => {
	const response = await axios
		.get<T>(url, {
			method,
			params,
		})
		.then((res) => {
			return res.data;
		});
	return response;
};

export default fetchData;
