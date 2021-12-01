
import readInputFileIntegers from '../shared/lib/read-input-file-integers.js';

const input = await readInputFileIntegers(import.meta);

const depths = input.reduce((chunks, value, index) => {
	if (input[index + 2] !== undefined) {
		chunks.push(value + input[index + 1] + input[index + 2]);
	}
	return chunks;
}, []);

const result = depths.reduce((state, depth) => {
	if (state.previousDepth && state.previousDepth < depth) {
		state.count += 1;
	}
	state.previousDepth = depth;
	return state;
}, {count: 0});

console.log(result.count);
