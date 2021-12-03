
import Submarine from './lib/submarine.js';
import readInputFileCommands from './lib/read-input-file-commands.js';

class SubmarinePart2 extends Submarine {

	up(amount) {
		this.aim -= amount;
	}

	down(amount) {
		this.aim += amount;
	}

	forward(amount) {
		this.distance += amount;
		this.depth += (this.aim * amount);
	}

}

const submarine = new SubmarinePart2();

for (const {direction, units} of await readInputFileCommands(import.meta)) {
	submarine[direction](units);
}

console.log(submarine.depth * submarine.distance);
