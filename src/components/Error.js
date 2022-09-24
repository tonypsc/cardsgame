import { FiXOctagon } from 'react-icons/fi';

import styles from './Error.module.css';

const Error = ({ error }) => {
	return (
		<div className={styles.container}>
			<FiXOctagon size={100} />
			<h1>{error.name}</h1>
			<h5>{error.message}</h5>
		</div>
	);
};

export { Error };
