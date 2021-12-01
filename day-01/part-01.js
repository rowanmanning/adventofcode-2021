
import readInputFileIntegers from '../shared/lib/read-input-file-integers.js';

const depths = await readInputFileIntegers(import.meta);

const result = depths.reduce((count, depth, index, source) => {
	if (index > 0 && depth > source[index - 1]) {
		return count + 1;
	}
	return count;
}, 0);

console.log(result);
