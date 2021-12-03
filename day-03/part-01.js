
import readInputFileLines from '../shared/lib/read-input-file-lines.js';
import rotateMatrix from './lib/rotate-matrix.js';

const input = (await readInputFileLines(import.meta)).map(line => line.split('').map(number => parseInt(number, 10)));
const inputRotated = rotateMatrix(input);

const gammaBinary = inputRotated.map(row => {
	const ones = row.filter(number => number === 1).length;
	const zeros = row.filter(number => number === 0).length;
	return (ones > zeros ? 1 : 0);
}).join('');

const epsilonBinary = inputRotated.map(row => {
	const ones = row.filter(number => number === 1).length;
	const zeros = row.filter(number => number === 0).length;
	return (ones < zeros ? 1 : 0);
}).join('');

const gamma = parseInt(gammaBinary, 2);
const epsilon = parseInt(epsilonBinary, 2);

console.log(gamma * epsilon);
