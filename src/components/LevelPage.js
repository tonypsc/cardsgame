import styles from './Level.module.css';

const LevelPage = () => {
	return (
		<div className={styles.container}>
			<button>Easy</button>
			<button>Normal</button>
			<button>Hard</button>
		</div>
	);
};

export { LevelPage };
