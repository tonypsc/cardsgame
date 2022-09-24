import { useState, useEffect } from 'react';

import styles from './Card.module.css';
import pokeballImg from '../assets/images/pokeball.png';

const Card = ({ pokemon }) => {
	const [down, setDown] = useState(false);
	// const [burned, setBurned] = useState(false);

	pokemon.facedown = down;
	// pokemon.burned = burned;

	useEffect(() => {
		setTimeout(() => {
			setDown(!down);
		}, 3000);
	}, []);

	const faceUP = () => {
		setDown(!down);
	};

	return (
		<>
			{pokemon.facedown ? (
				<div>
					<img
						onClick={faceUP}
						className={styles.pokeball}
						src={pokeballImg}
						alt="pokeball"
					/>
				</div>
			) : (
				<div className={styles.container}>
					<div className={styles.photo}>
						<div className={styles.circle}>
							<img src={pokemon.sprites.front_default} alt={pokemon.name} />
						</div>
					</div>
					<div className={styles.body}>
						<h1>{pokemon.name}</h1>
					</div>
				</div>
			)}
		</>
	);
};

export { Card };
