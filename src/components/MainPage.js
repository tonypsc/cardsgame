// import { useState } from 'react';

import { usePokemons } from '../hooks/usePokemons';
import { Card } from './Card';
import { Error } from './Error';
import { ShuffleArray } from '../helpers/ShuffleArray';

import styles from './MainPage.module.css';

const MainPage = () => {
	const { pokemons, loading, error } = usePokemons(5);

	if (error) return <Error error={error} />;

	const pokemonsDB = [...pokemons, ...pokemons];

	const shufflePoke = ShuffleArray(pokemonsDB);

	return (
		<div className={styles.app}>
			<div className={styles.body}>
				{loading ? (
					<div>Loading...</div>
				) : shufflePoke && shufflePoke.length > 0 ? (
					shufflePoke.map((pokemon) => (
						<Card key={Math.random() * pokemon.id} pokemon={pokemon} />
					))
				) : (
					<div>No data</div>
				)}
			</div>
		</div>
	);
};

export { MainPage };
