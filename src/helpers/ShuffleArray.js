const ShuffleArray = (arr) => {
	for (let i = arr.length - 1; i > 0; i--) {
		let ran = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[ran]] = [arr[ran], arr[i]];
	}

	return arr;
};

export { ShuffleArray };
