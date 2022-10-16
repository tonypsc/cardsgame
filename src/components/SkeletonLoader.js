import styles from './Skeleton.module.css';

const SkeletonLoader = () => {
	return (
		<div className={styles.card}>
			<div className={styles.back}></div>
			<div className={styles.back}></div>
			<div className={styles.back}></div>
			<div className={styles.back}></div>
			<div className={styles.back}></div>
			<div className={styles.back}></div>
			<div className={styles.back}></div>
			<div className={styles.back}></div>
			<div className={styles.back}></div>
			<div className={styles.back}></div>
			<div className={styles.back}></div>
			<div className={styles.back}></div>
		</div>
	);
};

export { SkeletonLoader };
