import axios, { Method, AxiosResponse } from "axios";

useEffect(() => {
	const controller = new AbortController();

	fetch("https://jsonplaceholder.typicode.com/todos", {
		signal: controller.signal,
	})
		.then((res) => res.json())
		.then((data) => {
			return data.body;
		});

	return () => controller.abort();
}, []);
