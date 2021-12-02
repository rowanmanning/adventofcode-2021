
import readInputFileCommands from './lib/read-input-file-commands.js';

const commands = await readInputFileCommands(import.meta);

const startingState = {
	aim: 0,
	depth: 0,
	horizontalPosition: 0
};

const position = commands.reduce((state, {direction, units}) => {
	switch (direction) {
		case 'forward':
			state.horizontalPosition += units;
			state.depth += (state.aim * units);
			break;
		case 'down':
			state.aim += units;
			break;
		case 'up':
			state.aim -= units;
			break;
	}
	return state;
}, startingState);

const result = position.horizontalPosition * position.depth;

console.log(result);
