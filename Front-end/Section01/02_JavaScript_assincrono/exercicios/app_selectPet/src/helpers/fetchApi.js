const fetchApi = (api) => {
	return fetch(api).then((response) => response.json());
};

export { fetchApi };
