const flipMatrix = matrix => (
	matrix[0].map((column, index) => (
		matrix.map(row => row[index])
	))
);

export const rotateRight = matrix => {
    return flipMatrix(matrix.reverse())
};

export const rotateLeft = matrix => {
    return flipMatrix(matrix).reverse()
};
