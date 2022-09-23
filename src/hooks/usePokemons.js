import { useState, useEffect } from 'react';

import { fetchData } from '../api';

import { RandomNumber } from '../helpers/RandomNumber';

export const usePokemons = (cantMax) => {
	const [pokemons, setPokemons] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getData = async () => {
			try {
				const pokes = [];
				setLoading(true);

				for (let i = 1; i <= cantMax; i++) {
					const result = await fetchData(RandomNumber(1, 151));
					pokes.push(result);
				}

				setPokemons(pokes);
				setError(null);
				setLoading(false);
			} catch (error) {
				setError(error);
				setLoading(false);
				setPokemons([]);
			}
		};

		getData();
	}, [cantMax]);

	return { pokemons, loading, error };
};