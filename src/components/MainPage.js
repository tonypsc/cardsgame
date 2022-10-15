import { useState } from 'react';

import { usePokemons } from '../hooks/usePokemons';
import { Card } from './Card';
import { Error } from './Error';

import styles from './MainPage.module.css';

const MainPage = () => {
	const { pokemons, loading, error } = usePokemons(5);
	const [initializer, setInitializer] = useState(true);
	const [selected, setSelected] = useState();
	const [burned, setBurned] = useState([]);

	if (error) return <Error error={error} />;

	if (initializer) {
		setTimeout(() => {
			setInitializer(false);
		}, 3000);
	}

	const handleClick = (name, index) => {
		if (!selected) {
			setSelected({ name, index });
			return;
		}

		if (selected.name === name) setBurned([...burned, name]);

		setSelected();
	};

	return (
		<div className={styles.app}>
			<div className={styles.body}>
				{loading ? (
					<div>Loading...</div>
				) : pokemons && pokemons.length > 0 ? (
					pokemons.map((pokemon, index) => {
						let status = 'flipped';
						if (!initializer) {
							status = 'normal';
							if (
								selected &&
								pokemon.name === selected.name &&
								index === selected.index
							)
								status = 'flipped';
							if (burned.find((pok) => pok === pokemon.name)) status = 'burned';
						}
						return (
							<Card
								key={pokemon.name + index}
								pokemon={pokemon}
								status={status}
								onClick={handleClick}
								index={index}
							/>
						);
					})
				) : (
					<div>No data</div>
				)}
			</div>
		</div>
	);
};

export { MainPage };
