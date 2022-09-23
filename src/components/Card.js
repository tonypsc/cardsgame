import { usePokemons } from '../hooks/usePokemons';

import './Card.css';
import { Error } from './Error';

export const Card = () => {
	const { pokemons, loading, error } = usePokemons(4);

	if (error) return <Error />;

	return (
		<div>
			{loading ? (
				<div>Cargando</div>
			) : pokemons && pokemons.length > 0 ? (
				<ul>
					{pokemons.map((pokemon) => (
						<li key={1 + 1}>{pokemon.name}</li>
					))}
				</ul>
			) : (
				<div>No pokemons</div>
			)}
		</div>
	);
};
