
import readInputFileIntegers from '../shared/lib/read-input-file-integers.js';

const input = await readInputFileIntegers(import.meta);

const result = input.reduce((state, depth) => {
	if (state.previousDepth && state.previousDepth < depth) {
		state.count += 1;
	}
	state.previousDepth = depth;
	return state;
}, {count: 0});

console.log(result.count);
