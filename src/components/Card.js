import styles from './Card.module.css';
import pokeballImg from '../assets/images/card-back.png';

const Card = ({ pokemon, status, onClick, index }) => {
	return (
		<div className={styles.cardContainer}>
			<div className={styles.card}>
				{status === 'normal' ? (
					<div className={styles.cardBack}>
						<img
							onClick={(e) => onClick(e.target.name, index)}
							src={pokeballImg}
							alt="back-img"
							name={pokemon.name}
						/>
					</div>
				) : (
					<div className={styles.cardFront}>
						<div className={styles.cardFrontContent}>
							<div className={styles.pokemonData}>
								<h3>{pokemon.name}</h3>
								<h4>HP {pokemon.stats[0].base_stat}</h4>
							</div>
							<div className={styles.pokemonPhoto}>
								<img
									src={pokemon.sprites.other.dream_world.front_default}
									alt="pokemon-img"
								/>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export { Card };
