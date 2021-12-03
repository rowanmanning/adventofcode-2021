
export default class Submarine {

	aim = 0;
	depth = 0;
	distance = 0;

	up() {
		throw new Error('Submarine#up must be provided by an extending class');
	}

	down() {
		throw new Error('Submarine#down must be provided by an extending class');
	}

	forward() {
		throw new Error('Submarine#down must be provided by an extending class');
	}

}
