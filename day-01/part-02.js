
import readInputFileIntegers from '../shared/lib/read-input-file-integers.js';

const depths = await readInputFileIntegers(import.meta);

const result = depths.reduce((count, depth, index, source) => {
	const previousWindow = source[index - 1] + depth + source[index + 1];
	const currentWindow = depth + source[index + 1] + source[index + 2];

	if (index > 0 && currentWindow > previousWindow) {
		return count + 1;
	}

	return count;
}, 0);

console.log(result);
