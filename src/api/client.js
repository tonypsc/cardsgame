const url = 'https://pokeapi.co/api/v2/pokemon';

const fetchData = async (endpoint) => {
	try {
		const result = await fetch(`${url}/${endpoint}`);
		return result.json();
	} catch (error) {
		throw new Error('Error fetching data with the API');
	}
};

export { fetchData };
