
export default function rotateMatrix(matrix) {
	const rotatedMatrix = [];
	for (const row of matrix) {
		row.forEach((number, index) => {
			rotatedMatrix[index] = rotatedMatrix[index] || [];
			rotatedMatrix[index].push(number);
		});
	}
	return rotatedMatrix;
}
