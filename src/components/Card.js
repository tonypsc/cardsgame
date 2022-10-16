import styles from './Card.module.css';
import pokeballImg from '../assets/images/card-back.png';

const Card = ({ pokemon, onClick, index, status, disabled }) => {
	return (
		<div
			className={
				status === 'normal' ? styles.card : `${styles.card} ${styles.flipped}`
			}
		>
			<div className={styles.front}>
				<img
					src={pokemon.sprites.other.dream_world.front_default}
					alt="pokemon-img"
				/>
			</div>
			<div
				className={
					status === 'normal' ? styles.back : `${styles.back} ${styles.flipped}`
				}
			>
				<img
					onClick={!disabled ? (e) => onClick(e.target.name, index) : null}
					src={pokeballImg}
					alt="back-img"
					name={pokemon.name}
					className={!disabled ? styles.cursorPointer : ''}
				/>
			</div>
		</div>
	);
};

export { Card };
