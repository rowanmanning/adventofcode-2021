
import readInputFileLines from '../shared/lib/read-input-file-lines.js';
import rotateMatrix from './lib/rotate-matrix.js';

const input = (await readInputFileLines(import.meta))
	.map(line => line.split('').map(number => parseInt(number, 10)));

function getColumnInfo(rows) {
	return rotateMatrix(rows).map(row => {
		const ones = row.filter(number => number === 1).length;
		const zeros = row.filter(number => number === 0).length;
		return {
			equal: (ones === zeros),
			most: (ones > zeros ? 1 : 0),
			least: (ones > zeros ? 0 : 1)
		};
	});
}

function findRating(rows, type, defaultRating) {
	let index = 0;
	let columnInfo;
	while (rows.length > 1) {
		columnInfo = getColumnInfo(rows);
		rows = rows.filter(row => {
			if (columnInfo[index].equal) {
				return row[index] === defaultRating;
			}
			return row[index] === columnInfo[index][type];
		});
		index += 1;
	}
	return rows[0].join('');
}

const oxygenGeneratorRatingBinary = findRating(input, 'most', 1);
const co2ScrubberRatingBinary = findRating(input, 'least', 0);

const oxygenGeneratorRating = parseInt(oxygenGeneratorRatingBinary, 2);
const co2ScrubberRating = parseInt(co2ScrubberRatingBinary, 2);

console.log(oxygenGeneratorRating * co2ScrubberRating);
