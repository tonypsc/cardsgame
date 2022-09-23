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
				<div>
					{pokemons.map((pokemon) => (
						<div key={pokemon.id}>
							<img src={pokemon.sprites.front_default} alt={pokemon.name} />
						</div>
					))}
				</div>
			) : (
				<div>No pokemons</div>
			)}
		</div>
	);
};
