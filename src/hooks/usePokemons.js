import { useState, useEffect } from 'react';

import { fetchData } from '../api';
import { RandomNumber } from '../helpers/RandomNumber';
import { ShuffleArray } from '../helpers/ShuffleArray';

const usePokemons = () => {
	const [pokemons, setPokemons] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const getData = async () => {
		try {
			const pokes = [];
			setLoading(true);

			while (pokes.length < 6) {
				const result = await fetchData(RandomNumber(1, 151));
				if (!pokes.find((arr) => arr.name === result.name)) pokes.push(result);
			}

			const data = [...pokes, ...pokes];
			const result = ShuffleArray(data);

			setPokemons(result);
			setError(null);
			setLoading(false);
		} catch (error) {
			setError(error);
			setLoading(false);
			setPokemons([]);
		}
	};

	const reload = () => {
		getData();
	};

	useEffect(() => {
		getData();
	}, []);

	return { pokemons, loading, error, reload };
};

export { usePokemons };
