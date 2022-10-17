import { useState } from 'react';

import { usePokemons } from '../hooks/usePokemons';
import { Card } from './Card';
import { SkeletonLoader } from './SkeletonLoader';
import { Error } from './Error';

import styles from './MainPage.module.css';

const MainPage = () => {
	const { pokemons, loading, error, reload } = usePokemons();
	const [turns, setTurns] = useState(0);
	const [selectedOne, setSelectedOne] = useState(null);
	const [selectedTwo, setSelectedTwo] = useState(null);
	const [count, setCount] = useState(1);
	const [burned, setBurned] = useState([]);
	const [disabled, setDisabled] = useState(false);

	const resetStates = () => {
		setTurns((prevTurns) => prevTurns + 1);

		setTimeout(() => {
			setSelectedOne(null);
			setSelectedTwo(null);
			setCount(1);
			setDisabled(false);
		}, 1000);
	};

	if (error) return <Error error={error} />;

	const handleClick = (name, index) => {
		setCount((prevCount) => prevCount + 1);

		selectedOne
			? setSelectedTwo({ name, index })
			: setSelectedOne({ name, index });

		if (selectedOne && selectedOne.name === name) setBurned([...burned, name]);

		if (count === 2) {
			setDisabled(true);
			resetStates();
		}
	};

	const newgame = () => {
		reload();
		setTurns(0);
	};

	return (
		<div className={styles.app}>
			<div className={styles.header}>
				<h1>Pokemon Card</h1>
				<button onClick={newgame}>New Game</button>
			</div>
			<div className={styles.body}>
				{loading ? (
					<SkeletonLoader />
				) : pokemons && pokemons.length > 0 ? (
					pokemons.map((pokemon, index) => {
						let status = 'normal';

						if (
							selectedOne &&
							pokemon.name === selectedOne.name &&
							index === selectedOne.index
						)
							status = 'flipped';

						if (
							selectedTwo &&
							pokemon.name === selectedTwo.name &&
							index === selectedTwo.index
						)
							status = 'flipped';

						if (burned.find((name) => name === pokemon.name)) status = 'burned';

						return (
							<Card
								key={pokemon.name + index}
								pokemon={pokemon}
								onClick={handleClick}
								index={index}
								status={status}
								disabled={disabled}
							/>
						);
					})
				) : (
					<div>No data</div>
				)}
			</div>
			<div className={styles.footer}>Turns: {turns}</div>
		</div>
	);
};

export { MainPage };
