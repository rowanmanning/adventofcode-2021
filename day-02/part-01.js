
import Submarine from './lib/submarine.js';
import readInputFileCommands from './lib/read-input-file-commands.js';

class SubmarinePart1 extends Submarine {

	up(amount) {
		this.depth -= amount;
	}

	down(amount) {
		this.depth += amount;
	}

	forward(amount) {
		this.distance += amount;
	}

}

const submarine = new SubmarinePart1();

for (const {direction, units} of await readInputFileCommands(import.meta)) {
	submarine[direction](units);
}

console.log(submarine.depth * submarine.distance);
