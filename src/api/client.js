const url = 'https://pokeapi.co/api/v2/pokemon';

export const fetchData = async (endpoint) => {
	try {
		const result = await fetch(`${url}/${endpoint}`);
		return await result.json();
	} catch (error) {
		throw new Error('Error fetching data with the API');
	}
};
