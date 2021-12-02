
import readInputFileCommands from './lib/read-input-file-commands.js';

const commands = await readInputFileCommands(import.meta);

const startingState = {
	depth: 0,
	horizontalPosition: 0
};

const position = commands.reduce((state, {direction, units}) => {
	switch (direction) {
		case 'forward':
			state.horizontalPosition += units;
			break;
		case 'down':
			state.depth += units;
			break;
		case 'up':
			state.depth -= units;
			break;
	}
	return state;
}, startingState);

const result = position.horizontalPosition * position.depth;

console.log(result);
